// MyReact 

const MyReact = (function() {
    let hooks = [] // state 값들이 저장되는 배열
    let currentHook = 0 // 새로운 state가 시작될 index
      
    return {
    
      render(Component) {
        const Comp = Component() // Counter 객체, useState 생성
        Comp.render() // 'render', { count, text } 출력
        
        currentHook = 0
        // compnentHook이 render 될 때마다 0으로 초기화 되는 이유는
        // 다음 컴포넌트의 render를 위해서
        // 인덱스가 0부터 시작하여 useState의 호출 횟수와 같아야 하기 때문이다.
        
        // component의 가장 최근 state들은 component의 return 과정에서
        // 클로저에 의하여 setCount, setText의 인자 형태로 저장되어있다. 
        // ex) setCount(count + 1)
        
        // setState가 실행되면 setStateHookIndex의 위치에 newState 값으로 덮어씌여진다.
        // hooks 배열에는 가장 최근에 setState 된 값들이 저장되는 것이다.
        // 이후 componet의 useState가 호출되면서
        // hooks[currentHook] 값들에 알맞게 대응되어 새로운 state값을 반환한다.
        
        // render를 해줘야 새로운 useState가 호출되고
        // 클로저 개념으로 인해 state 값들이 컴포넌트의 onClick 함수의 파라미터로 저장이 된다.
        // 그렇기 때문에 setState를 호출하면 무조건 !!렌더링!!을 해주어야 값이 섞이지 않는다.
        
        // 과정이 끝나게 되면 다음 컴포넌트를 위해 currentHook을 다시 0으로 초기화해준다.
        
        
        
        return Comp // Counter 객체가 반환됨
      },
      
      useState(initialValue) {
        hooks[currentHook] = hooks[currentHook] || initialValue
        const setStateHookIndex = currentHook
        const setState = (newState) => (hooks[setStateHookIndex] = newState)
        // setState에서 클로저의 개념으로 인해 setStateHookIndex 값은 저장된다.
        return [hooks[currentHook++], setState]
      },
    }
  })()
   
  
   
  
   
  
   
  
   
  
   
  
  function Counter() {
    const [count, setCount] = MyReact.useState(0)
    
    return {
      click: () => { 
        setCount(count + 1)
      },
      render: () => console.log('render1', { count }),
    }
  }
   
  
   
  
   
  
   
  
   
  
  function Counter2() {
    const [count, setCount] = MyReact.useState(0)
    const [text, setText] = MyReact.useState('')
    // currentHook은 2가 됨
    
    return {
      click: () => { 
        setCount(count + 10)
        setText(text + 'var ')  
      },
      render: () => console.log('render2', { count, text }),
    }
  }
   
  
   
  
   
  
   
  
   
  
  let App = MyReact.render(Counter)
  let App2 = MyReact.render(Counter2)
  
  App.click()
  App = MyReact.render(Counter)
  
  App2.click()
  App2 = MyReact.render(Counter2)
  
  App.click()
  App = MyReact.render(Counter)
  
  App2.click()
  App2 = MyReact.render(Counter2)
   