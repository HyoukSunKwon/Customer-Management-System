import './App.css';
import Customer from './components/Customer';

const customers =[
   {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': 'Elisa Ng',
  'birthday': '210211',
  'gender': 'Fmail',
  'job': 'Students'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': 'James Tommer',
  'birthday': '210221',
  'gender': 'Male',
  'job': 'Programmer'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': 'Skylar Kwon',
  'birthday': '210321',
  'gender': 'Femail',
  'job': 'Doctor'
}
]


function App() {
  return (
    <div>
   {
     customers.map( c => {
       return (
         <Customer
         key= {c.id}
         id={ c.id }
         image={ c.image}
         name={ c.name}
         birthday={ c.birthday }
         gender={ c.gender}
         job ={ c.job }
         />  
       )
     })
   }
    </div>
  );
}

export default App;
