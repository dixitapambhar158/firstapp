import { useEffect ,useState } from 'react';  
import { Row,Col,Container } from 'react-bootstrap';
function Pre(){

    const initialvalues = {
        rno:"",
        name:"",
        s1:"",
        s2:"",
        s3:"",
        s4:"",
        s5:"",
        total:"",
        per:""
    }

    const [data,setdata] = useState(initialvalues)
    const [mydata,myalldata] = useState([]);
    const [edit,editdata] = useState([]);
    const [isedit,issetedit] = useState(false);
    const [editid,seteditid] = useState(-1);
    

    const handleChange = (e) =>{
        setdata({...data,[e.target.name]:e.target.value});
    }
    const btnhandler = () =>{
        data.total = parseInt(data.s1) + parseInt(data.s2) + parseInt(data.s3) + parseInt(data.s4) + parseInt(data.s5);
        data.per = data.total/5;
        console.log(data);

        if(isedit){
            let edata = [...mydata]
            edata[editid] = data;
            myalldata(edata);

            setdata ( {
                rno:"",
                name:"",
                s1:"",
                s2:"",
                s3:"",
                s4:"",
                s5:"",
                total:"",
                per:"",
            })
        }
        else{
            myalldata(mydata =>[...mydata,data]);
            setdata ({
                rno:"",
                name:"",
                s1:"",
                s2:"",
                s3:"",
                s4:"",
                s5:"",
                total:"",
                per:"",
            })
        }
    }

    return(
        <>
            <Container>
            <div className='App'>
                <h4>STUDENT RESULT</h4>
                <Row className="justify-content-center mt-5">
                    <Col lg={8}>
                  
                    <Row className="mb-4">
                        <Col lg={2}>Roll No</Col>
                        <Col lg={8}>
                        <input type="integer"   autoComplete='off' value={data.rno} name="rno" onChange={handleChange} className="form-control"  placeholder="Enter Your Roll No" />
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col lg={2}>Name</Col>
                        <Col lg={8}>
                        <input type="text"   autoComplete='off' name="name" value={data.name} className="form-control" onChange={handleChange} placeholder="Enter Your name" />
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col lg={2}>PYTHON</Col>
                        <Col lg={8}>
                            <input type="integer"  name="s1" className="form-control" value={data.s1} onChange={handleChange} autoComplete='off'/>
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col lg={2}>RUBBY</Col>
                        <Col lg={8}>
                            <input type="integer"  name='s2' className="form-control" value={data.s2} onChange={handleChange} autoComplete='off' />
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col lg={2}>PHP</Col>
                        <Col lg={8}>
                            <input type="text"  name='s3' className="form-control" value={data.s3} onChange={handleChange} autoComplete='off' />
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col lg={2}>REACT</Col>
                        <Col lg={8}>
                            <input type="text"  name='s4'className="form-control" value={data.s4} onChange={handleChange} autoComplete='off'/>
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col lg={2}>DART</Col>
                        <Col lg={8}>
                            <input type="text"name='s5'className="form-control"  value={data.s5} onChange={handleChange} autoComplete='off' />
                        </Col>
                    </Row>
                
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col lg={12}>
                       <input type="submit"  className="btn btn-success" onClick={btnhandler}/>
                    </Col>
                </Row>
            </div>
            </Container>

            <Container>
                <table border={2}>
                    <tr>
                        <th>Roll no</th>
                        <th>Name</th>
                        <th>sub1</th>
                        <th>sub2</th>
                        <th>sub3</th>
                        <th>sub4</th>
                        <th>sub5</th>
                        <th>Total</th>
                        <th>Per</th>
                        <th>Action</th>
                    </tr>

                    {
                        mydata.map((item)=>{
                           return(
                            <tr>
                                <th>{item.rno}</th>
                                <th>{item.name}</th>
                                <th>{item.s1}</th>
                                <th>{item.s2}</th>
                                <th>{item.s3}</th>
                                <th>{item.s4}</th>
                                <th>{item.s4}</th>
                                <th>{item.total}</th>
                                <th>{item.per}</th>
                                <button>Delete</button>
                                <button>Edit</button>
                            </tr>
                           )
                        })
                    }
                </table>

               
            </Container>
        </>
    )
}
export default Pre