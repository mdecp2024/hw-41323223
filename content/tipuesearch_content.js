var tipuesearch = {"pages": [{'title': 'About', 'text': '國立虎尾科技大學機械設計工程系 \n National Formosa University \n Department of Mechanical Design Engineering \n cp2024 計算機程式 \n 課程教材: \n Learn Python with Jupyter  ( site ,  ebook ) \n 教育版帳號\xa0microsoftonline 登入點:\xa0 https://login.microsoftonline.com/ \n Teams 線上教學: \n 以 "學號@nfu.edu.tw" 登入  https://login.microsoftonline.com/  Office 365 \n Teams 團隊代碼: fqpabi8 \n 個人倉儲:\xa0 https://github.com/mdecp2024/hw-41323223 \n 個人網站:\xa0 https://mdecp2024.github.io/hw-41323223/ \n 其他資訊: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n', 'tags': '', 'url': 'About.html'}, {'title': 'Attendance', 'text': '出席 (10%) - 自行舉證評分 \n 自行利用 Github commits 提交記錄評分. \n', 'tags': '', 'url': 'Attendance.html'}, {'title': 'HW 1', 'text': '主題: 基於瀏覽器的分散式版次管理與整合程式開發環境 (10%) \n USB 隨身碟: \n 下載  python_2025_lite.7z  (428 MB, 解開壓縮後約 1.5 GB) \n Jupyter \n What are Github and Codespaces? \n Hello World - GitHub Docs \n 利用包含學號的字串作為帳號, 申請免費使用 Github. \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 1 \n \n PART 1: Creating the basics 資料整理 (10%) \n 啟動可攜程式系統後, 在命令列中: \n y:\\>cd notebook \n y:\\notebook>jupyter lab --collaborative \n 進入  01_string_input_print.ipynb  練習如何修改 PART1 notebook 後存檔, 上傳至作業倉儲中的 downloads 目錄後, 透過  https://nbviewer.org/  將已經提交的  01_string_input_print.ipynb , 嵌入下列網頁中. \n \n 上列 iframe 標註的 html 語法: \n <iframe width="600" height="400" src="https://nbviewer.org/urls/mde.tw/cp2024_hw/downloads/01_string_input_print.ipynb"></iframe> \n 完成上述流程整理後, 請將 HW1 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 1.html'}, {'title': 'HW 1 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 Topic 1 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 1 Exam.html'}, {'title': 'w7', 'text': '\n', 'tags': '', 'url': 'w7.html'}, {'title': 'w10', 'text': '題目一: \n \n 題目二: \n \n \n 請問 Python 程式中有關變數的命名, 除了必須以"_", 以及英文大小寫字母開頭之外, 還有甚麼需要特別注意的地方? \n 答:不能使用關鍵字或保留字Python 有一組預定義的保留字（關鍵字），如  if 、 for 、 while 、 class 、 import  等，這些字詞有特殊的語法用途，不能用作變數名稱、區分大小寫、避免以數字開頭、避免使用與內建函數重名的變數名，在命名變數時，除了基本的命名規則外，還應注意保持程式碼的清晰性與可讀性，遵循 Python 社群的命名慣例，避免使用保留字和內建名稱，以確保程式碼更容易理解並避免潛在錯誤。 \n \n 題目三: \n \n \n 心得： 藉由這五種程式執行方法去執行微積分與物理的計算，我認知到了電腦的運算速度非常快且精準，若我能好好掌握這類技能，在業界一定有幫助 \n \n \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w11_hw', 'text': 'hw 影片 \n 程式一 \n import math\n \nn = 10  # 圓的寬度和高度\ncenter = (n // 2, n // 2)  # 圓心座標，這裡是 (5, 5)\nradius = n // 2  # 半徑為 5\n \nfor y in range(n):  # 遍歷每一行\n    for x in range(n):  # 遍歷每一列\n        # 計算當前點 (x, y) 到圓心的距離\n        distance = math.sqrt((x - center[0])**2 + (y - center[1])**2)\n        # 如果距離圓心的距離接近半徑，就在這個位置印出星號\n        if abs(distance - radius) < 0.5:\n            print(\'＊\', end=\'\')\n        else:\n            print(\'\u3000\', end=\'\')\n    print()  # 換行 \n 說明: \n \n \n n = 10  代表圓的尺寸為 10x10。 \n center = (n // 2, n // 2)  設置圓心為 (5, 5)，這樣圓形會居中。 \n radius = n // 2  設置半徑為 5。 \n 程式遍歷每個點，計算每個點到圓心的距離，若距離接近半徑，則印出星號（ * ），否則印出空格（   ）。 \n \n \n \n 程式二 \n from browser import html\nfrom browser import document as doc\nimport math\n \n# 利用 html 建立 canvas 超文件物件\ncanvas = html.CANVAS(width = 400, height = 400)\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\n \n# 每一格的 pixel 數\ngs = 20\n \n# gs*tc = canvas width and height\nctx = canvas.getContext("2d")\n \ndef dRect(lux, luy, w, h, s=1, c=\'#ff0000\'):\n    ctx.lineWidth = s\n    ctx.strokeStyle = c\n    ctx.beginPath();\n    ctx.rect(lux, luy, w, h)\n    ctx.stroke();\n     \ndef grid(width, height, grid_pix):\n    # x 方向共 width 格\n    # y 方向共 height 格\n    # grid_pix, 每一個的 pixel 點數\n    # 利用迴圈與座標增量繪圖\n    for i in range(width):\n        for j in range(height):\n            dRect(i*grid_pix, j*grid_pix, grid_pix, grid_pix, 1, "lightgrey")\n \ndef fill(x, y, color):\n    ctx.fillStyle = color\n    ctx.fillRect(x-1, y-1, gs, gs)\n \ndef draw_circle_in_grid(center_x, center_y, radius, grid_size):\n    # 遍歷每一個網格中心，判斷該網格是否位於圓內\n    for i in range(10):  # 10 格 x\n        for j in range(10):  # 10 格 y\n            # 計算每個格子的中心座標\n            grid_center_x = (i * grid_size) + grid_size / 2\n            grid_center_y = (j * grid_size) + grid_size / 2\n \n            # 計算此點是否在圓內\n            distance = math.sqrt((grid_center_x - center_x) ** 2 + (grid_center_y - center_y) ** 2)\n             \n            if distance <= radius:\n                # 填滿圓內的格子\n                fill(i * grid_size, j * grid_size, "black")\n \n# 繪製背景格子\ngrid(10, 10, gs)\n \n# 圓心位置與半徑\ncenter_x = 5 * gs  # 圓心 X 座標\ncenter_y = 5 * gs  # 圓心 Y 座標\nradius = 5 * gs  # 半徑\n \n# 在網格上繪製圓\ndraw_circle_in_grid(center_x, center_y, radius, gs) \n 說明: \n \n draw_circle_in_grid  函數 ：這個新函數會遍歷每個格子的中心，並計算該格子的中心點是否位於圓內。如果該點距圓心的距離小於或等於半徑，則填充該格子為黑色。 \n 圓心和半徑設置 ：圓心設置為  (5 * gs, 5 * gs) ，即圓心位於網格的中間位置，半徑為  5 * gs ，這樣可以使圓形在 10x10 網格中顯示。 \n 使用  fill  函數 ：當某個格子位於圓內時，我們用  fill  函數將該格子填充為黑色。 \n \n 11/27程式 \n n = 11\nspace = \'_\'\ncenter = n//2\n#print (center)\n \nfor y in range(n):\n    for x in range(n):\n        print("(", x, ", ",y, ")",sep="") \n 11/27程式二 \n from browser import html\nfrom browser import document as doc\n\n# 利用 html 建立 canvas 超文件物件\ncanvas = html.CANVAS(width = 400, height = 400)\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\n\n# 每一格的 pixel 數\ngs = 20\n\n# gs*tc = canvas width and height\n\nctx = canvas.getContext("2d")\n\nwidth = 11\nheight = 11\n\n"""\nctx.lineWidth  1\nctx.strokeStyle=\'lightgrey\'\nctx.beginPath()\n#ctx.rect(i*gs,j*gs,gs,gs)\nctx.rect(0,0,150,100)\nctx.stroke()\n"""\n\nfor i in range(width):\n    for j in range(height):\n        #dRect(i*gs, j*gs, gs, gs, 1, "lightgrey")\n        ctx.linewidth = 1\n        ctx.strokeStyle=\'lightgrey\'\n        ctx.beginPath();\n        ctx.rect(i*gs,j*gs,gs,gs)\n        ctx.stroke();\n             \n \n', 'tags': '', 'url': 'w11_hw.html'}, {'title': 'w12_hw', 'text': '第一題:input()與print() \n 範例程式: \n 第一題程式:input(): 你來自哪裡? \xa0print(): 貓咪 \n 第二題程式   第三題程式 \n 第一題:字串 input(),and print() \n 字符串是由一系列字符組成的，可以使用單引號（\'）或雙引號（"）來定義字符串。 \n 第二題:變數和字串連接 \n 在 Python 中，變數（Variables） 是用來儲存資料的名稱，可以存放不同類型的資料，如數字、字串、列表等。而字串串接（String Concatenation） 是將兩個或多個字串合併成一個字串的過程。 \n 第三題:列表和 if ... in .../ else... \n 在 Python 中，列表（Lists） 是一種可變的資料結構，用來儲存一系列的項目。你可以將不同的數據類型存儲在列表中，包括數字、字符串，甚至其他列表。使用 if... in... 來檢查某個元素是否存在於列表中。 \n 使用 if... in... 可以檢查某個元素是否存在於列表中。如果元素存在，執行 if 區塊；否則，執行 else 區塊。 \n 第四題程式\xa0 \xa0 第五題程式 \xa0\xa0\xa0 第六題程式 \n 第四題:列表方法: .append() and .remove() \n 列表方法:在 Python 中，列表（list）是一種常見的數據結構，提供了多種方法來操作和處理列表內容。 \n 第五題:列表方法: .index() .pop(), and .insert() \n 第六題:列表切片 List slicing \n 列表切片:什麼是列表切片？ 在 Python 中，列表切片是一種強大的操作方式，用於從列表中提取子列表，而不改變原列表。 \n 第七題程式\xa0   第八題程式 \xa0  第九題程式 \xa0  第十題程式 \n 第七題:Changing, adding, and removing list elements using slicing 使用切片更改、添加和移除列表元素 \n 第八題:for ... in range() :是 Python 中用來執行 迴圈 的一種語法結構，通常用於在一段固定範圍內重複執行某些操作。 \n 第九題:For loop with if... == ... / else:在 Python 中，你可以在 for 迴圈中結合條件判斷 (if...else) 來執行不同的操作。這種結構非常適合用來篩選、分類或執行特定條件下的操作。 \n 第十題:For loop for searching:For 迴圈可用來在列表（或其他可迭代物件）中尋找特定元素 \n', 'tags': '', 'url': 'w12_hw.html'}, {'title': 'w13_hw', 'text': 'w13作業: 下列圖形中的兩個正方形外圍, 以黑色畫筆畫圓, 並設法在各線條所圍成的封閉區域塗上不同顏色. 操作過程請拍攝影片, 並在頁面中列出作業心得. \n w13 程式連結 \n 心得:我使用AI來協助我完成這星期的作業， 這次作業讓我學到了如何使用 canvas 來繪製圖形，並處理不同區域的顏色填充，看了AI給出的程式解釋我也稍微了解這程式的原理', 'tags': '', 'url': 'w13_hw.html'}, {'title': 'HW 2', 'text': '主題: Python 的數列、判斷式與重複迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 2 and Part 3 \n \n 延續 HW 1 網頁資料整理與程式練習方法, 整理下列內容 (20%): \n PART 2: Introduction to lists and if/else statements \n PART 3: Introduction to the for loop \n 完成上述流程整理後, 請將 HW2 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 2.html'}, {'title': 'HW 2 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 2 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 2 Exam.html'}, {'title': 'HW 3', 'text': '主題: Python 的數字、演算法與迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 4 and Part 5 \n 完成上述流程整理後, 請將 HW3 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 3.html'}, {'title': 'HW 3 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 3 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 3 Exam.html'}, {'title': 'w5', 'text': "\n \n height = 10\n\nfor i in range(height):\n    print('  ' * (height - i - 1) + '*' * (2 * i + 1)) \n \xa0 \xa0 \xa0 \xa0 \xa0 * \xa0 \xa0 \xa0 \xa0 \xa0*** \xa0 \xa0 \xa0 \xa0 ***** \xa0 \xa0 \xa0 \xa0******* \xa0 \xa0 \xa0 ********* \xa0 \xa0 \xa0*********** \xa0 \xa0 ************* \xa0 \xa0*************** \xa0 ***************** \xa0******************* \n", 'tags': '', 'url': 'w5.html'}, {'title': 'w6', 'text': '\n http://192.168.56.1:23020/ \n', 'tags': '', 'url': 'w6.html'}, {'title': 'HW 4', 'text': '主題: 利用 Python 控制機電模擬系統 (20%) \n 利用\xa0 https://solvespace.com/ \xa0建立機械系統零組件 \n 利用  CoppeliaSim  建立機電模擬系統 \n 利用  Python  跨網路控制瀏覽器上的機電模擬系統 \n 範例: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n 完成上述流程整理後, 請將 HW4 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 4.html'}, {'title': 'HW 4 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 4 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 4 Exam.html'}, {'title': 'Final Report', 'text': '期末口頭與書面專題報告 (20%) \n 期末口頭專題報告影片: \n ...... \n 期末書面專題報告檔案 (pdf): \n ...... \n 電腦輔助設計與實習課程總結心得: \n ...... \n 期末報告自評成績: \n 完成上述流程後, 請將 Final Report 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'Final Report.html'}, {'title': 'Brython', 'text': '從 1 累加到 100: \n 1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};