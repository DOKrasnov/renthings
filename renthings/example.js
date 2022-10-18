        class Hello extends React.Component {
            render() {
              return <div>
                          <p>Имя: {this.props.name}</p>
                          <p>Возраст: {this.props.age}</p>
                      </div>;
            }
          }
          ReactDOM.render(
              <Hello name="Tom" age="33" />,
              document.getElementById("app")
          )
          
 
//  <div className="test1" onClick={say_hi}> {this.props.title} Hello123, {this.props.name123} </div>
          
this и context

оберточный div и html5

router

state

REST 
  HTTP-method url
  GET-чтение
  POST-создание
  PUT-обновление
  DELETE-удаление

согласно REST для каждого метода используется строго свой метод

RPC
  {
    class:
      метод:
        парам1:
        парам2:
  }
  на принимающей стороне есть диспетчер, который берет параметры и обращается к методу
  
    на Java
    /servlet
      данные приходят одним куском на точку входа, а на сервере диспетчер разбирает данные
      
JSON-RPC - то же что и RPC для JSON
SOAP - то же что и RPC для XML


onClick={sum.bind(this,2,3)}
    
    function sum (a,b) {
      alert(a+b);
    }
    
   кнопки Сегодня Завтра, чтобы одна была активна
   
render {
  let b1_class = this.state.b1_class;
  let b2_class = this.state.b2_class;
  <button className={b1_class} onClick={changeDate.bind(this, 'b1'>
  <button className={b2_class} onClick={changeDate.bind(this, 'b2'> 
                                        
  function changeDate(button) {
    let state=this.state;
       state.b1_class="";
       state.b2_class="";
       state[button]='active';
                                       this.setState(state)}
   
   