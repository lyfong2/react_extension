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
    路由組件的lazyLoad
        //1.通過React的lazy函數配合import()函數動態加載路由組件 ===> 路由組件代碼會被分開打包
        const Login = lazy(()=>import('@/pages/Login'))

        //2.通過<Suspense>指定在加載得到路由打包文件前顯示一個自訂義loading介面
        <Suspense fallback={<h1>loading...</h1>}>
            <Switch>
                <Route path="/xxx" component={Xxxx} />
                <Redirect to="/login"/>
            </Switch>
        </Suspense>

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

## 4.Effect Hook
    (1) Effect Hook 可以讓你在函數組件中執行副作用操作(用於模擬組件中的生命週期鉤子)
    (2) React中的副作用操作:
            發ajax請求數據獲取
            設置訂閱/啟動定時
            手動更改真實DOM
    (3) 語法和說明:
            useEffect(() => {
                // 在此可執行任何帶副作用操作
                return () => {// 在組件卸載前執行
                    // 在此做一些收尾工作, 比如清除定時器/ 取消訂閱等
                }
            }, [stateValue])    //如果指定的是[], 回調函數只會在第一次render()後執行

    (4) 可以把useEffect Hook 看作如下三個函數的組合
            componentDidMount()
            componentDidUpdate()
            componentWillUnmount()




