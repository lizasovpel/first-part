import { Component } from 'react';
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [
                {name: "John C.", salary: 800, increase: false, promote: true, id: 1},
                {name: "Alex M.", salary: 3000, increase: true, promote: false, id: 2},
                {name: "Carl W.", salary: 5500, increase: false, promote: false, id: 3}
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 4
    }
    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary, 
            increase: false,
            promote: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return{
                data: newArr
            }
        })
    }

    onToggleIncrease = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item
            })
        }))
    }

    onTogglePromote = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, promote: !item.promote}
                }
                return item
            })
        }))
    }

    searchEmployee = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    filterPost = (items, filter) => {
        switch (filter){
            case 'promote': 
                return items.filter(item => item.promote);
            case 'over1000' :
                return items.filter(item => item.salary > 1000);
            default: 
            return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }


    render(){
        const {data, term, filter} = this.state
        const employees = this.state.data.length
        const increased = this.state.data.filter(item => item.increase).length
        const visibleData = this.filterPost(this.searchEmployee(data, term), filter)

        return (
            <div className="app">
                <AppInfo employees = {employees}
                increased = {increased}/>
                <div className="search-panel">
                    <SearchPanel onUpdateSearch = {this.onUpdateSearch}/>
                    <AppFilter filter = {filter}
                    onFilterSelect = {this.onFilterSelec}/>
                </div>
                <EmployeesList 
                    data={visibleData}
                    onDelete = {this.deleteItem}
                    onTogglePromote = {this.onTogglePromote}
                    onToggleIncrease = {this.onToggleIncrease}/>
                <EmployeesAddForm onAdd = {this.addItem}/>
    
            </div>
        );
    
    }
}

export default App;


