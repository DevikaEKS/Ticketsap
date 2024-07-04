// // // // // import React, { useState } from 'react';
// // // // // import 'bootstrap/dist/css/bootstrap.min.css';

// // // // // const TicketPage = () => {
// // // // //   const [subject, setSubject] = useState('');
// // // // //   const [project, setProject] = useState('');
// // // // //   const [ticketBody, setTicketBody] = useState('');
// // // // //   const [attachment, setAttachment] = useState(null);

// // // // //   const handleSave = () => {
// // // // //     // Handle save functionality
// // // // //     console.log({
// // // // //       subject,
// // // // //       project,
// // // // //       ticketBody,
// // // // //       attachment
// // // // //     });
// // // // //     alert('Form Saved!');
// // // // //   };

// // // // //   return (
// // // // //     <div className="container mt-5">
// // // // //       <div>  
// // // // //         <h1 className='text-center my-5'>Create your Ticket</h1>
// // // // //       <form>
// // // // //         <div className="form-group">
// // // // //           <label htmlFor="subject" className='col-sm-2'>Subject</label>
// // // // //           <input
// // // // //             type="text"
// // // // //             className="form-control col-sm-8"
// // // // //             id="subject"
// // // // //             value={subject}
// // // // //             onChange={(e) => setSubject(e.target.value)}
// // // // //             style={{ width: '100%' }}
// // // // //           />
// // // // //         </div>
// // // // //         <div className="form-group">
// // // // //           <label htmlFor="project" className='col-sm-2'>Project</label>
// // // // //           <select
// // // // //             className="form-control col-sm-8"
// // // // //             id="project"
// // // // //             value={project}
// // // // //             onChange={(e) => setProject(e.target.value)}
// // // // //             style={{ width: '100%' }}
// // // // //           >
// // // // //             <option value="">Select Project</option>
// // // // //             <option value="project1">SAP Business One</option>
// // // // //             <option value="project2">Project 2</option>
// // // // //             <option value="project3">Project 3</option>
// // // // //           </select>
// // // // //         </div>
// // // // //         <div className="form-group">
// // // // //           <label htmlFor="ticketBody" className='col-sm-2'>Ticket Body</label>
// // // // //           <textarea
// // // // //             className="form-control"
// // // // //             id="ticketBody"
// // // // //             rows="3"
// // // // //             value={ticketBody}
// // // // //             onChange={(e) => setTicketBody(e.target.value)}
// // // // //             style={{ width: '100%' }}
// // // // //           ></textarea>
// // // // //         </div>
// // // // //         <div className="form-group">
// // // // //           <label htmlFor="attachment">Attachment</label>
// // // // //           <input
// // // // //             type="file"
// // // // //             className="form-control-file"
// // // // //             id="attachment"
// // // // //             onChange={(e) => setAttachment(e.target.files[0])

// // // // //             }
// // // // //           />
// // // // //         </div>
// // // // //         <button type="button" className="btn btn-success" onClick={handleSave}>
// // // // //           Save
// // // // //         </button>
// // // // //       </form>
// // // // //     </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default TicketPage;





// // // import React, { useState } from 'react';
// // // import 'bootstrap/dist/css/bootstrap.min.css';
// // // import './TicketPage.css';
// // // import dragim from "../Asset/Group 1 (1).png";

// // // const TicketPage = () => {
// // //   const [subject, setSubject] = useState('');
// // //   const [project, setProject] = useState('');
// // //   const [ticketBody, setTicketBody] = useState('');
// // //   const [attachment, setAttachment] = useState(null);

// // //   const handleSave = () => {

// // //     console.log({
// // //       subject,
// // //       project,
// // //       ticketBody,
// // //       attachment
// // //     });
// // //     alert('Form Saved!');
// // //   };

// // //   return (
// // //     <div className="container-fluid mt-4">
// // //       <div>
// // //         <h1 className='text-center my-1'>Create your Ticket</h1>
// // //         <form>
// // //           <div className='d-flex justify-content-between'>
// // //             <div className="form-group">
// // //               <label htmlFor="subject">Subject</label>
// // //               <input
// // //                 type="text"
// // //                 className=" border-dark"
// // //                 id="subject"
// // //                 value={subject}
// // //                 onChange={(e) => setSubject(e.target.value)}
// // //               />
// // //             </div>
// // //             <div className="form-group">
// // //               <label htmlFor="project" >Project</label>
// // //               <select
// // //                 className=" uniform-width border-dark"
// // //                 id="project"
// // //                 value={project}
// // //                 onChange={(e) => setProject(e.target.value)}
// // //               >
// // //                 <option value="">Select Project</option>
// // //                 <option value="project1">SAP Business One</option>
// // //                 <option value="project2">Project 2</option>
// // //                 <option value="project3">Project 3</option>
// // //               </select>
// // //             </div>
// // //             <div className="form-group">
// // //               <label htmlFor="ticketBody" >Ticket Body</label>
// // //               <textarea
// // //                 className=" uniform-width border-dark"
// // //                 id="ticketBody"
// // //                 rows="2"
// // //                 value={ticketBody}
// // //                 onChange={(e) => setTicketBody(e.target.value)}
// // //               ></textarea>
// // //             </div>
// // //           </div>
// // //           <div className='d-flex justify-content-between'>
// // //             <div className='me-1' >
// // //               <label htmlFor="actual-btn" className="btn btn-warning p-2">Attach files <img src={dragim} alt="Drop files here" className="dragimg" /></label>
// // //               <input className="btn btn-warning text-dark form-control" id="actual-btn" type="file"
// // //                 accept=".pdf"
// // //                 hidden />
// // //             </div>
// // //             <div>
// // //               <button type="button" className="btn btn-primary my-2 " onClick={handleSave}>
// // //                 Create Ticket
// // //               </button>
// // //             </div>


// // //           </div>


// // //           {/* {fileName && <div className="file-name">{fileName}</div>} */}






// // //         </form>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default TicketPage;



// // import React, { useState } from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import './TicketPage.css';
// // import dragim from "../Asset/Group 1 (1).png";

// // const TicketPage = () => {
// //   const [subject, setSubject] = useState('');
// //   const [project, setProject] = useState('');
// //   const [ticketBody, setTicketBody] = useState('');
// //   const [attachment, setAttachment] = useState(null);

// //   const handleSave = () => {
// //     console.log({
// //       subject,
// //       project,
// //       ticketBody,
// //       attachment
// //     });
// //     alert('Form Saved!');
// //   };

// //   return (
// //     <div className="container-fluid mt-4">
// //       <div>
// //         <h1 className='text-center my-1'>Create your Ticket</h1>
// //         <form>
// //           <div className='row'>
// //             <div className="col-md-4 form-group">
// //               <label htmlFor="subject" className='me-2'>Subject</label>
// //               <input
// //                 type="text"
// //                 className="form-control d-inline-block w-75 border-dark"
// //                 id="subject"
// //                 value={subject}
// //                 onChange={(e) => setSubject(e.target.value)}
// //               />
// //             </div>
// //             <div className="col-md-4 form-group">
// //               <label htmlFor="project" className='me-2'>Project</label>
// //               <select
// //                 className="form-control d-inline-block w-75 border-dark"
// //                 id="project"
// //                 value={project}
// //                 onChange={(e) => setProject(e.target.value)}
// //               >
// //                 <option value="">Select Project</option>
// //                 <option value="project1">SAP Business One</option>
// //                 <option value="project2">Project 2</option>
// //                 <option value="project3">Project 3</option>
// //               </select>
// //             </div>
// //             <div className="col-md-4 form-group">
// //               <label htmlFor="ticketBody" className='me-2'>Ticket Body</label>
// //               <textarea
// //                 className="form-control d-inline-block w-75 border-dark"
// //                 id="ticketBody"
// //                 rows="1"
// //                 value={ticketBody}
// //                 onChange={(e) => setTicketBody(e.target.value)}
// //               ></textarea>
// //             </div>
// //           </div>
// //           <div className='d-flex justify-content-between mt-3'>
// //             <div className='me-1'>
// //               <label htmlFor="actual-btn" className="btn btn-warning p-2">Attach files <img src={dragim} alt="Drop files here" className="dragimg" /></label>
// //               <input className="btn btn-warning text-dark form-control" id="actual-btn" type="file"
// //                 accept=".pdf"
// //                 hidden />
// //             </div>
// //             <div>
// //               <button type="button" className="btn btn-primary my-2" onClick={handleSave}>
// //                 Create Ticket
// //               </button>
// //             </div>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default TicketPage;




// // 




// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './TicketPage.css';
// import dragim from "../Asset/Group 1 (1).png";

// const TicketPage = () => {
//   const [subject, setSubject] = useState('');
//   const [project, setProject] = useState('');
//   const [ticketBody, setTicketBody] = useState('');
//   const [attachment, setAttachment] = useState(null);
//   const [errors, setErrors] = useState({ subject: false, project: false, ticketBody: false, attachment: false });
//   const [fileName, setFileName] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     const newErrors = {
//       subject: subject === '',
//       project: project === '',
//       ticketBody: ticketBody === '',
//       attachment: attachment === null,
//     };

//     setErrors(newErrors);

//     if (Object.values(newErrors).some(error => error)) {
//       return;
//     }

//     console.log({
//       subject,
//       project,
//       ticketBody,
//       attachment
//     });
//     alert('Form Saved!');
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setAttachment(file);
//     setFileName(file ? file.name : '');
//   };

//   return (
//     <div className="container-fluid mt-4">
//       <div>
//         <h1 className='text-center my-4'>CREATE YOUR TICKET</h1>
//         <form onSubmit={handleSubmit}>
//           <div className='d-flex flex-column flex-md-row justify-content-between mb-3'>
//             <div className="form-group me-2 col-2">
//               <label htmlFor="subject" className="form-label">SUBJECT</label>
//               <input
//                 type="text"
//                 className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
//                 id="subject"
//                 value={subject}
//                 onChange={(e) => setSubject(e.target.value)}
//               />
//               {errors.subject && <div className="invalid-feedback">Please fill in the subject.</div>}
//             </div>
//             <div className="form-group me-2">
//               <label htmlFor="project" className="form-label">PROJECT</label>
//               <select
//                 className={`form-select ${errors.project ? 'is-invalid' : ''}`}
//                 id="project"
//                 value={project}
//                 onChange={(e) => setProject(e.target.value)}
//               >
//                 <option value="">Select Project</option>
//                 <option value="project1">SAP Business One</option>
//                 <option value="project2">Project 2</option>
//                 <option value="project3">Project 3</option>
//               </select>
//               {errors.project && <div className="invalid-feedback">Please select a project.</div>}
//             </div>
//             <div className="form-group">
//               <label htmlFor="ticketBody" className="form-label">TICKET BODY</label>
//               <textarea
//                 className={`form-control ${errors.ticketBody ? 'is-invalid' : ''}`}
//                 id="ticketBody"
//                 rows="5"
//                 value={ticketBody}
//                 onChange={(e) => setTicketBody(e.target.value)}
//               ></textarea>
//               {errors.ticketBody && <div className="invalid-feedback">Please fill in the ticket body.</div>}
//             </div>
//           </div>
//           <div className='d-flex flex-column flex-md-row justify-content-between'>
//             <div className='me-1'>
//               <label htmlFor="actual-btn" className={`btn btn-warning p-2 ${errors.attachment ? 'is-invalid' : ''}`}>Attach files <img src={dragim} alt="Drop files here" className="dragimg" /></label>
//               <input 
//                 className="btn btn-warning text-dark form-control" 
//                 id="actual-btn" 
//                 type="file"
//                 accept=".pdf"
//                 hidden
//                 onChange={handleFileChange}
//               />
//               {errors.attachment && <div className="invalid-feedback">Please attach a file.</div>}
//               {fileName && <div className="file-name mt-2">{fileName}</div>}
//             </div>
//             <div className="mt-3 mt-md-0">
//               <input type="submit" className="btn btn-primary" value="Create Ticket" />
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default TicketPage;















import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TicketPage.css';
import dragim from "../Asset/Group 1 (1).png";

const TicketPage = () => {
  const [subject, setSubject] = useState('');
  const [project, setProject] = useState('');
  const [ticketBody, setTicketBody] = useState('');
  const [attachment, setAttachment] = useState(null);
  const [errors, setErrors] = useState({ subject: false, project: false, ticketBody: false, attachment: false });
  const [fileName, setFileName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      subject: subject === '',
      project: project === '',
      ticketBody: ticketBody === '',
      attachment: attachment === null,
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some(error => error)) {
      return;
    }

    console.log({
      subject,
      project,
      ticketBody,
      attachment
    });

    alert('Form Saved!');
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setAttachment(file);
    setFileName(file ? file.name : '');
  };

  return (
    <div className="container-fluid mt-4">
      <div>
        <h1 className='text-center my-4'>CREATE YOUR TICKET</h1>
        <div className='bgticket card p-3 '>
        <form onSubmit={handleSubmit}>
          <div className='row mb-3'>
            <div className="col-4 form-group d-flex ">
              <label htmlFor="subject">SUBJECT</label>
              <input
                type="text"
                className={`form-control col-8 ${errors.subject ? 'is-invalid' : ''}`}
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              {errors.subject && <div className="invalid-feedback">Please fill in the subject.</div>}
            </div>
            <div className="col-4 form-group d-flex ">
              <label htmlFor="project" >PROJECT</label>
              <select
                className={`form-select col-8 ${errors.project ? 'is-invalid' : ''}`}
                id="project"
                value={project}
                onChange={(e) => setProject(e.target.value)}
              >
                <option value="">Select Project</option>
                <option value="project1">SAP Business One</option>
                <option value="project2">Project 2</option>
                <option value="project3">Project 3</option>
              </select>
              {errors.project && <div className="invalid-feedback">Please select a project.</div>}
            </div>
          </div>
          <div className='row mb-3'>
            <div className="col-md-8 form-group">
              <label htmlFor="ticketBody" className="form-label">TICKET BODY</label>
              <textarea
                className={`form-control ${errors.ticketBody ? 'is-invalid' : ''}`}
                id="ticketBody"
                rows="3"
                value={ticketBody}
                onChange={(e) => setTicketBody(e.target.value)}
              ></textarea>
              {errors.ticketBody && <div className="invalid-feedback">Please fill in the ticket body.</div>}
            </div>
          </div>
          <div className='d-flex'>
            <div className=' mx-5'>
              <label htmlFor="actual-btn" className={`btn btn-warning p-2 ${errors.attachment ? 'is-invalid' : ''}`}>Attach files <img src={dragim} alt="Drop files here" className="dragimg" /></label>
              <input 
                className="btn btn-warning text-dark form-control" 
                id="actual-btn" 
                type="file"
                accept=".pdf"
                hidden
                onChange={handleFileChange}
              />
              {errors.attachment && <div className="invalid-feedback">Please attach a file.</div>}
              {fileName && <div className="file-name">{fileName}</div>}
            </div>
            <div className="mx-5">
              <input type="submit" className="btn btn-primary" value="Create Ticket" />
            </div>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default TicketPage;
