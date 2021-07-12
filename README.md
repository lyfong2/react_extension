## 1.setState
    setState更新狀態的2種寫法
        (1). setState(stateChange, [callback])----------對象式的setState
            1.stateChange為狀態改變對象(該對象可以體現出狀態的更改)
            2.callback是可選的回調函數, 它在狀態更新完畢,介面也更新後(render調用後)才被調用
        (2). setState(updater, [callback])--------函數式的setState
            1.updater為返回stateChange對象的函數.
            2.updater可以接收到state和props.
            3.callback是可選的回調函數, 它在狀態更新完畢, 介面也更新後(render調用後)才被調用.
    總結:
        1.對象式的setState是函數式的setState的簡寫方式(語法糖)
        2.使用原則:
                (1).如果新狀態不依賴原狀態 ===> 使用對象方式
                (2).如果新狀態依賴於原狀態 ===> 使用函數方式
                (3).如果需要在setState()執行後獲取最新的狀態數據,要在第二個callback函數中讀取



## 2.lazyLoad


## 3.Hooks
    1.React Hook/Hooks是甚麼?
        (1) Hook是React 16.8.0版本增加的新特性/新語法
        (2) 可以讓你在函數組件中使用state以及其他的React特性
    
    2.三個常用的Hook
        (1) State Hook: React.useState()
        (2) Effect Hook: React.useEffect()
        (3) Ref Hook: React.useRef()
    
    3.State Hook
        (1) State Hook讓函數組件也可以有state狀態, 並進行狀態數據的讀寫操作
        (2) 語法: const [xxx, setXxx] = React.useState(initValue)
        (3) useState()說明:
            參數: 第一次初始化指定的值在內部做緩存
            返回值: 包含2個元素的數組, 第1個為內部當前狀態值, 第2個為更新狀態值的函數
        (4) setXxx()2種寫法:
            setXxx(newValue): 參數為非函數值, 直接指定新的狀態值, 內部用其覆蓋原來的狀態值
            setXxx(value => newValue): 參數為函數, 接收原本的狀態值, 返回新的狀態值, 內部用其覆蓋原來的狀態值