import time
from time import sleep
from selenium import webdriver
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.action_chains import ActionChains
import os
from selenium.common.exceptions import NoSuchElementException
#driver = webdriver.Edge()
driver = webdriver.Firefox()
#driver = webdriver.Chrome()
driver.implicitly_wait(3600)

driver.get("https://qtatar.com/join?s=1")
driver.find_element(By.NAME, 'name').send_keys('😂')
driver.find_element(By.NAME, 'password').send_keys('a123123')
driver.find_element(By.NAME, 'submit').click()

driver.get("https://qtatar.com/build?id=32")
#driver.find_element(By.XPATH, f'/html/body/div[1]/div[4]/div[2]/map[2]/area[12]').click()
while True:
        for i in range(1,108+1):
                driver.find_element(By.XPATH, f'//*[@id="vlist"]/tbody/tr[{i}]/td[2]/a').click()
                sleep(1.5)
                driver.find_element(By.XPATH, '/html/body/div[1]/div[4]/div[2]/div/table/tbody/tr[3]/td[2]/a').click()    
        sleep(2) # = sleep * the range - 375 = da valu
