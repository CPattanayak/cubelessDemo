from pymongo import MongoClient
import os
mongourl = os.getenv("MONGO-URL", "mongodb://db:27017")
client = MongoClient(mongourl)
db = client.customerapp
custDetail = db["customer"]

def savecustomer(event, context):

    jsonbody=event['data']
    deletemap = {'mobile': jsonbody['mobile']}
    x = custDetail.delete_many(deletemap)
    print(x.deleted_count, " documents deleted.")
    print("Processing mongo json")
    returnCustomer=custDetail.insert(
        {'firstName': jsonbody['firstName'], 'lastName': jsonbody['lastName'], 'email': jsonbody['email'],
         'mobile': jsonbody['mobile']})
    print("Customer insertion is done",returnCustomer)

    response = {
        "statusCode": 200

    }

    return response

def getcustomer(event, context):
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
    totalcount = custDetail.count()
    for customer in custDetail.find().skip(skips).limit(page_size):
        returnList.append(
            {'firstName': customer['firstName'], 'lastName': customer['lastName'], 'email': customer['email'],
             'mobile': customer['mobile']})
    return {'current': page_num,'rowCount': page_size, 'rows': returnList, 'total': totalcount}


def deletecustomer(event, context):
    jsonbody =event['data']
    deletemap = {'mobile': jsonbody['mobile']}
    x = custDetail.delete_many(deletemap)
    print(x.deleted_count, " documents deleted.")
    response = {
        "statusCode": 200

    }
    return response


