import styles from '../styles/eom.module.css';
import { Toolbar } from './components/toolbar';
export const eom=({employee})=>{
    console.log(employee);
    return(
        
        <div className="page-container">
        <Toolbar></Toolbar>
            <div className={styles.main}>
                <h1>Employee of the Month</h1>
                <div className={styles.employeeOfTheMonth}>
                    <h3>{employee.name}</h3>
                    <h4>{employee.position}</h4> 
                    <img src={employee.image}/>
                    <p>{employee.description}</p>

                </div>
            </div>
        </div>
    );
};

export const getServerSideProps= async pageContext => {
    const apiResponse = await fetch(
        'https://my-json-server.typicode.com/raghav1817/next_news/employeeoftheMonth',
    ); 
    const employee= await apiResponse.json();
    return{
        props: {employee}
    } 
};
export default eom;