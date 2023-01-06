import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function ViewScore() {
    const params = useParams();

    const [post, setPost] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {

        getUsers();

    }, []);

    let getUsers = async () => {

        try {
            const scores = await axios.get(`https://63a149e3e3113e5a5c514a70.mockapi.io/scores/${params.userid}`);

            const marks = (scores.data.scores);
            setPost(marks);
            setLoading(false);

        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <>

        {
            isLoading ? <img src='https://media.giphy.com/media/sSgvbe1m3n93G/giphy.gif' /> : <div className="container mt-5">
            <div className="row">
                
            {post.map((subject)=>{
                return(<div className="col-sm-4">
                <h2>{subject.exam}</h2><br />
                <table className="table table-borderless table-hover">
                    <tbody>
                        <tr>
                            <th>Tamil</th>
                            <td>{subject.tamil}</td>
                        </tr>
                        <tr>
                            <th>English</th>
                            <td>{subject.english}</td>
                        </tr>
                        <tr>
                            <th>Maths</th>
                            <td>{subject.maths}</td>
                        </tr>
                        <tr>
                            <th>Physics</th>
                            <td>{subject.physics}</td>
                        </tr>
                        <tr>
                            <th>Chemistry</th>
                            <td>{subject.chemistry}</td>
                        </tr>
                        <tr>
                            <th>Biology</th>
                            <td>{subject.biology}</td>
                        </tr>
                    </tbody>
                </table>
            </div>)

            })}

                
                
            </div>
        </div>
        }
            
        </>
    )
}

export default ViewScore
