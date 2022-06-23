import React, { useEffect, useState } from 'react'
import { useNavigate, useParams,Link } from 'react-router-dom'
import { getPhonesDetailsService } from '../services/phones.services'
import { Button, Spinner } from 'react-bootstrap'

function PhoneDetails() {

    const navigate = useNavigate();
    const { id } = useParams();
    const [ phonesDetails, setPhonesDetails ] = useState("");

    useEffect(() => {
        getPhoneDetails()
    }, [])

    const getPhoneDetails = async () => {
        try {
            const response = await getPhonesDetailsService(id);
            setPhonesDetails(response.data)
        } catch(error) {
            navigate('/error');
        }
    }

    if (!phonesDetails) {
      return (<Button variant="success" disabled>
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
    <div>
        <h3> Phone Details </h3>
        <p> Detalles del producto: <strong> {phonesDetails.name} </strong> </p> 
        
        
        
        
     </div>
  )
}

export default PhoneDetails