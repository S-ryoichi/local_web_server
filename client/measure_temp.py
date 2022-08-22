# import smbus
import time

import requests
import json

# class Temperature:
#     def __init__(self):
#         self.i2c = smbus.SMBus(1)
#         self.addr = 0x00
#     def get_temp(self):
#         data_add = 0x01
#         req = self.i2c.read_byte_data(self.addr, data_add)
#         return req
#     def __del__(self):
#         pass

class HTTP:
    def __init__(self, url, header):
        self.url = url
        self.header = header
    def post(self, data):
        dict_data = {}
        send_data = {}
        for (index, value) in zip(self.header, data):
            dict_data[index] = value
        send_data["data"] = dict_data
        json_data = json.dumps(dict_data)
        print(json_data)
        response = requests.post(self.url, headers = {"Content-type": "application/json"}, data = json_data)
        print(response.status_code)
        if (response.status_code == 200):
            print(response.text)
    def get(self):
        response = requests.get(self.url)
        print(response.status_code)


def main():
    httpComm = HTTP(" http://127.0.0.1:3000/temp", ["timestamp", "temp"])
    # Temp = Temperature()
    # temp = Temp.get_temp()
    temp = 30
    timestamp = int(time.time() * 1000)
    httpComm.post([str(timestamp), str(temp)])

if __name__ == "__main__":
    main()



