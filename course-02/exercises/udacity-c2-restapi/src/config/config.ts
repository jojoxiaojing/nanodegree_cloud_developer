export const config = {
  "dev": {
    "username": process.env.POSTGRESS_USERNAME,
    "password": process.env.POSTGRESS_PASSWORD,
    "database": process.env.POSTGRESS_DATABASE,
    "host": process.env.POSTGRESS_HOST,
    "dialect": process.env.POSTGRESS_DIALECT,
    "aws_region": process.env.POSTGRESS_REGION,
    "aws_profile": "",
    "aws_media_bucket": process.env.POSTGRESS_BUCKET

  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
