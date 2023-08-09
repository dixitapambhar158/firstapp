import { useEffect ,useState } from 'react';  
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col,Container } from 'react-bootstrap';
// mui icon
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteSharpIcon from '@mui/icons-material/EditNoteSharp';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


function Main(){
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

  };

  const[data,setData] = useState(initialvalues);       
  const[mydata,myalldata]=useState([]); 
  const[edit,editdata]=useState([]);
  const[isedit,issetedit]=useState(false); 
  const[editid,seteditid]=useState(-1);
  const[search,setSearch]=useState('')



  const handleChange = (e) =>{
         setData({...data,[e.target.name]:e.target.value});
  }
  const btnhandler = () => {
    data.total= parseInt(data.s1) + parseInt(data.s2) + parseInt(data.s3) + parseInt(data.s4) + parseInt(data.s5);
    data.per = data.total/5;

    console.log(data);


    if(isedit)
    {
      let edata = [...mydata]
      edata[editid] = data;
      myalldata(edata)

      setData({
        rno:"",   
        name:"",
        s1:"",
        s2:"",
        s3:"",
        s4:"",
        s5:"",
        total:"",
        per:""
      })
    }
    else{
      myalldata(mydata => [...mydata,data]);
      setData({
        rno:"",   
        name:"",
        s1:"",
        s2:"",
        s3:"",
        s4:"",
        s5:"",
        total:"",
        per:""
      })
    }
  }
  const deletehandler = (k) =>{
        console.log(k);
        const newPeople = mydata.filter((t,i) => i !== k );
        myalldata(newPeople);
  }
  const edithandler = (k) => {
        
     seteditid(k);
     issetedit(true)
     const newPeople = mydata[k];
     console.log(newPeople);
     setData(newPeople);

     
  }
  
  useEffect(() => {
    console.log(mydata);
    console.log(edit);
  },[mydata,edit])

  


  
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
                        <input type="integer" onChange={handleChange} value={data.rno} autoComplete='off' name="rno" className="form-control"  placeholder="Enter Your Roll No" />
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col lg={2}>Name</Col>
                        <Col lg={8}>
                        <input type="text" onChange={handleChange} value={data.name} autoComplete='off' name="name" className="form-control" placeholder="Enter Your name" />
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col lg={2}>PYTHON</Col>
                        <Col lg={8}>
                            <input type="integer" value={data.s1} name="s1" className="form-control" autoComplete='off' onChange={handleChange}  />
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col lg={2}>RUBBY</Col>
                        <Col lg={8}>
                            <input type="integer" value={data.s2} name='s2' className="form-control" autoComplete='off' onChange={handleChange} />
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col lg={2}>PHP</Col>
                        <Col lg={8}>
                            <input type="text" value={data.s3} name='s3' className="form-control" autoComplete='off' onChange={handleChange} />
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col lg={2}>REACT</Col>
                        <Col lg={8}>
                            <input type="text" value={data.s4} name='s4'className="form-control"  autoComplete='off'onChange={handleChange} />
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col lg={2}>DART</Col>
                        <Col lg={8}>
                            <input type="text" value={data.s5} name='s5'className="form-control"  autoComplete='off' onChange={handleChange} />
                        </Col>
                    </Row>
                
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col lg={12}>
                       <input type="submit" onClick={btnhandler} className="btn btn-success"/>
                    </Col>
                </Row>
            </div>
            </Container>
            <Container>
            <Row className="mb-4 text-center">
                    <Col lg={12}> 
                        <input type="search" className="ps-5" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}></input>
                    </Col>
                </Row>  
                <table border="2">
                    <tr>
                        <th>Rno</th>
                        <th>Name</th>
                        <th>Sub1</th>
                        <th>Sub2</th>
                        <th>Sub3</th>
                        <th>Sub4</th>
                        <th>Sub5</th>
                        <th>Total</th>
                        <th>Per</th>
                        <th>Action</th>
                    </tr>
                    {
                        mydata.filter((el) => {
                            if(search){
                                return el.name.includes(search)
                            }
                            else{
                                return el
                            }
                        }).map((item,k)=>{
                            return(
                                <tr>
                                    <th>{item.rno}</th>
                                    <th>{item.name}</th>
                                    <th>{item.s1}</th>
                                    <th>{item.s2}</th>
                                    <th>{item.s3}</th>
                                    <th>{item.s4}</th>
                                    <th>{item.s5}</th>
                                    <th>{item.total}</th>
                                    <th>{item.per}</th>
                                    <th>
                                        <Tooltip title="Delete">
                                        <IconButton>
                                            <DeleteIcon  onClick={()=>{deletehandler(k)}}/></IconButton>
                                        </Tooltip>
                                        </th>
                                    <th>
                                        <Tooltip title="Edit">
                                            <IconButton><EditNoteSharpIcon onClick={()=>{edithandler(k)}}/></IconButton>
                                        </Tooltip>
                                    </th>
                                </tr>
                            )
                        })
                        }
                </table>
            </Container>
        </>
    )
}
export default Main  