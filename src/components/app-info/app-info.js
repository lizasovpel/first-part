import './app-info.css'

const AppInfo = ({employees, increased}) => {
    return (
        <div className="app-info">
            <h1>Employees</h1>
            <h2>Total: {employees}</h2>
            <h2>Bonuses: {increased}</h2>
        </div>
    )
}

export default AppInfo;
