import React, { useEffect, useState } from 'react'
import Addpepole from '../service/addpepole.service'

const Home = () => {

    let [data, setDate] = useState(null)

    useEffect(() => {
        let isMounted = true
        if (isMounted) {
            Addpepole.get()
                .then((data) => {
                    setDate(data.data.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        return () => {
            isMounted = false
        }
    }, [])




    return (
        <div className='home'>


            {
                data && data.map((item) => {
                    return (
                        <div className="box" key={item._id}>
                            <p className="title">{item.name}</p>
                            <div className="info">
                                <p>email: {item.email}</p>
                                <p>phone: {item.phone}</p>
                                <p>age: {item.age}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home
