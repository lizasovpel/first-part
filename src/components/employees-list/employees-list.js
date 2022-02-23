import EmployeesListItem from '../employees-list-item/employees-list-item'
import './employees-list.css'

const EmployeesList = ({data, onDelete, onToggleIncrease, onTogglePromote}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item
        return (
            
            // <EmployeesListItem name = {item.name} salary ={item.salary}/>
            <EmployeesListItem   
                key={id} 
                {...itemProps}
                onDelete = {() => onDelete(id)}
                onToggleIncrease = {() => onToggleIncrease(id)}
                onTogglePromote = {() => onTogglePromote(id)}/>

        )
    })
    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;