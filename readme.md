# Getting Started with Mern-Music Back-end

## Get node_modules
npm install

## Add Database config
cd config
type nul > default.json

Past this in default.json
{
    "mongoURI":
    "mongodb+srv://<userName>:<password>@<clusterName>.jgbov.mongodb.net/<databaseName>?retryWrites=true&w=majority"
}

Replace <Information> by your informations

## Start Back End
npm run app