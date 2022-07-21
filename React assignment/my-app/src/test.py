from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
import time
import pdb

driver=webdriver.Chrome(executable_path=ChromeDriverManager().install())
driver.maximize_window()

driver.get("http://localhost:3000/")

# driver.find_element(By.ID, 'title').click()
# driver.find_element(By.XPATH, '//button[@id="addButton"]').click()
# driver.find_element(By.ID, 'title').send_keys('Sukhada')
# driver.find_element(By.XPATH, '//textarea[@id="description"]').send_keys('my blog')

# scrolling to a particular element (element should have a unique id)
# element=driver.find_element(By.ID, 'addSection')

# driver.execute_script("arguments[0].scrollIntoView();",element)

#fetching multiple elements
time.sleep(5)
ele=driver.find_elements(By.XPATH,'//p[@id="descr"]')
print("Op:",len(ele))
for i in range(5):
    print(ele[i].text)

# time.sleep(10)
pdb.set_trace()
driver.close()