import {simsons} from "./data/dataSims";
import {SimsComponent} from "./component/Simsons/SimsComponent";
const App = () => {
    return (
        <div className="App">
            {
                simsons.map((simson,id)=>(
                         <SimsComponent item={simson} key={id}/>
                ))
            }
        </div>
    );
};
export {App};