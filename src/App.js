import contacts from "./contacts.json"
import './App.css';



let fiveFirstContacts = contacts.slice(0, 5)

let randomContact = 
  
function App(){

return(
  <section className="famousImage">
<h1> IronContacts</h1>
<table>
  <tr>
    <td>Picture</td>
    <td>Name</td>
    <td>popularity</td>
    <td>Won Oscar</td>
    <td>Won Emmmy</td>
  </tr>
</table>
  <table>
    {fiveFirstContacts.map(contacts =>{

      return(  

        <tr>
          <td> <img className="imageContact" src={contacts.pictureUrl} alt ="famous"/> </td>
          <td>{contacts.name}</td>
          <td>{contacts.popularity}</td>
          <td>{contacts.wonOscar ? <>🏆</> : <></>}</td>
          <td>{contacts.wonEmmy ? <> 🏆 </> : <></>}</td>
        </tr>

      )
    
    })}
  </table>
    </section>
)

}


export default App;
