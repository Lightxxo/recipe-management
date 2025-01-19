import ChefList from '../chef-list/chef-list';
import './chef-section.css'

export default function ChefSection(){

    return (

        <div className='c-section'>
            <div className="chef-section">
                <p id= 'chefs'>Chefs 👨‍🍳</p>
            </div>
            <ChefList></ChefList>
        </div>

        
    );
}