import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getAllPhonesService } from '../services/phones.services'
import { Button, Spinner } from 'react-bootstrap'

function PhonesList() {

    const navigate = useNavigate()
    const [ listPhones, setListPhones ] = useState([]);

    useEffect(() => {
        getAllPhones();
    }, [])

    const getAllPhones = async () => {
       try {
            const response = await getAllPhonesService();
            setListPhones(response.data)
            console.log(response.data)
        } catch(error) {
           navigate('/error')
        }
    }
        if (!listPhones) {
        return ( <Button variant="success" disabled>
            <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
            />
            Loading...
        </Button>)
        }

        return (
        <div className="App">
          <h3> Phone List </h3> 
          <div>
            { listPhones.map((eachPhone) => {
                return (
                <div>
                    <Link
                    to={`/phones/${eachPhone._id}`}
                    >
                    {eachPhone.name}
                    </Link>
                        {/* <li> {eachPhone.name} </li> */}
                </div>
                )
                })
            }
          </div>
      </div>
        )
    
}

export default PhonesList;