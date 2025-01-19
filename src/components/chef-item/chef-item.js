
import "./chef-item.css";

export default function ChefItem({item, index}){
    console.log("GOT ITEM:", item, index)
    return(
        <div className="chef-item-container">
            <p id="name">{item.firstname} {item.lastname}</p>
            <p id = 'username'> AKA- {item.login.username}</p>
            <p id = 'email'> {item.email}</p>
        </div>
    )
}