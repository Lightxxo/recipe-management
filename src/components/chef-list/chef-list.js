import { useContext, useEffect, useState } from "react";
import { ChefsContext } from "../../contexts/contexts";
import ChefItem from "../chef-item/chef-item";
import './chef-list.css'

export default function ChefList() {
    const { chefs, setChefs } = useContext(ChefsContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        if (chefs && chefs.length > 0) {
            setLoading(false); 
        }
    }, [chefs]);

    return (
        <div className={loading ? 'loading' : `marble-background`}>
            <ul>
                {loading ? (
                     <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> 
                ) : (
                    chefs.map((item, index) => (
                        <ChefItem key={index} item={item} index={index} />
                    ))
                )}
            </ul>
        </div>
    );
}
