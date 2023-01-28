import React from 'react';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile mt-16">
            <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
            {/* <div class="drawer-content flex flex-col items-center justify-center"> */}
                {/* <!-- Page content here --> */}
                {/* <label for="dashboard-drawer" class="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

            {/* </div> */}
            <div class="drawer-side ">
                <label for="dashboard-drawer" class="drawer-overlay"></label>
                <ul class="menu p-4 w-80 bg-base-100 text-base-content bg-slate-300">
                    {/* <!-- Sidebar content here --> */}
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;