import DashboardFinanceiro from "../components/DashboardFinanceiro";

function Admin() {
    return (
        <div className="max-w-5xl mx-auto">
            <h1>Admin Page - Área Restrita</h1>
            <DashboardFinanceiro />
        </div>
    )
}

export default Admin