import React from 'react'

const AdminReports = ({adminReports, setSelectedReport}) => {



  return (
    <div className='admin-reports'>
      {adminReports?.map((kandidat) => {
        console.log(kandidat);
        return (
          <div>
            <img src={kandidat.avatar} alt="asdasd" />
            <p>Name: {kandidat.name}</p>
            <p>Email: {kandidat.email}</p>
          </div>
        );
      })}
    </div>
  )
}

export default AdminReports
