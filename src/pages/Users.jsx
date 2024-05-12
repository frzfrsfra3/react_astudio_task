import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Filters from '../components/Filters'
import Table from '../components/Table'

export default function Users() {

  const columns = ['FIRST NAME','LAST NAME', 'MAIDEN NAME', 'AGE', 'GENDER', 'EMAIL', 'USERNAME', 'BLOOD GROUP', 'EYE COLOR','Date Of Birth','domain'];
  const rows = [ 'firstName', 'lastName', 'maidenName', 'age', 'gender', 'email', 'username', 'bloodGroup', 'eyeColor','birthDate','domain'];
  const filters = {
    'Gender' : {
     'gender' : ['male' , 'female']
    },
    'Eye Color': {
      'eyeColor': ['Brown','Blue','Gray','Green']
    },
    'birthDate': {
      'birthDate':['1975-10-20','1980-01-19']
    },
    'Blood Group' : {
     'bloodGroup' : ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']
    }
    ,'domain':
    {
      'domain':['homestead.com','apple.com']
    }
    
  }
  
  return (
    <div className='p-3 flex flex-col gap-3'>
      <Breadcrumb active='Users'/>
      <Filters filters={filters}/>
      <Table columns={columns} rows={rows} api='https://dummyjson.com/users' target='users' />
    </div>
  )
}
