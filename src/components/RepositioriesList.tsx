import { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypeSelector } from "../hooks/useTypeSelector";

const RespositoriesList: React.FC = () => {
    const [term, setTerm] = useState('');
    const { searchRep } = useActions();
    const { data, error, loading} = useTypeSelector((state) => state.repositiories);
    //console.log(state.package.name);
    
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        searchRep(term);
    };
    
    return(<div> 
        <form onSubmit={onSubmit}>
            <input value={term} onChange={(e) => setTerm(e.target.value)}/>
            <button>Search</button>
        </form>
        {error && <h3>{error}</h3>}
        {loading && <h3>loading...</h3>}
        {!error && !loading && 
        data.map((name) => <div key={name}> {name} </div>)}
    </div>);
};

export default RespositoriesList;