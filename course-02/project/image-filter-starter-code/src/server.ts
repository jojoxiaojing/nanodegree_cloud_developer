import express from 'express';
import { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { filterImageFromURL, deleteLocalFiles } from './util/util';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;

  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  app.get("/filteredimage", async (req: Request, res: Response) => {
    // validate the image_url query
    let image_url: string = req.query.image_url;
    if (!image_url) {
      return res.status(400).send("URL not provided")
    }

    // call filterImageFromURL(image_url) to filter the image
    const image = await filterImageFromURL(image_url)

    // send the resulting file in the response
    res.sendFile(image)

    // deletes any files on the server on finish of the response
    res.on("finish", () => {
      deleteLocalFiles([image]);
      console.log(image)
    })

  })

  // Root Endpoint
  // Displays a simple message to the user
  app.get("/", async (req: Request, res: Response) => {
    res.send("try GET /filteredimage?image_url={{}}")
  });


  // Start the Server
  app.listen(port, () => {
    console.log(`server running http://localhost:${port}`);
    console.log(`press CTRL+C to stop server`);
  });
})();