from pymongo import MongoClient
import os
mongourl = os.getenv("MONGO-URL", "mongodb://db:27017")
client = MongoClient(mongourl)
db = client.itemapp
itemDetail = db["itemdetail"]

def saveitem(event, context):

    jsonbody=event['data']
    deletemap = {'itemName': jsonbody['itemName']}
    x = itemDetail.delete_many(deletemap)
    print(x.deleted_count, " documents deleted.")
    print("Processing mongo json")
    returnitem=itemDetail.insert(
        {'itemName': jsonbody['itemName'], 'price': jsonbody['price'],
         'avalibility': jsonbody['avalibility'],
         'imageName': jsonbody['imageName']})
    print("Item insertion is done",returnitem)

    response = {
        "statusCode": 200

    }

    return response

def getitem(event, context):
    jsonbody = event['data']
    returnList = []
    page_size = 10
    if jsonbody['size']:
        page_size=jsonbody['size']
    page_num = 1
    if jsonbody['page']:
        page_num = jsonbody['page']
    query= {}

    skips = page_size * (page_num - 1)
    totalcount = itemDetail.count()
    for item in itemDetail.find().skip(skips).limit(page_size):
        returnList.append(
            {'itemName': item['itemName'], 'price': item['price'],
             'avalibility': item['avalibility'],
             'imageName': item['imageName']})
    return {'current': page_num,'rowCount': page_size, 'rows': returnList, 'total': totalcount}


def deleteitem(event, context):
    jsonbody =event['data']
    deletemap = {'itemName': jsonbody['itemName']}
    x = itemDetail.delete_many(deletemap)
    print(x.deleted_count, " documents deleted.")
    response = {
        "statusCode": 200

    }
    return response


