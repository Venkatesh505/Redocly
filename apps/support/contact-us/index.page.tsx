import React, { useState } from 'react';
import styled from 'styled-components';
import { breakpoints } from '@redocly/theme/core/utils';

export const frontmatter = {
  title: 'Contact Us',
  description: 'Contact Us',
};

const PageWrapper = styled.div`
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Section = styled.section`
  margin-bottom: 48px;
`;

const TitileContent = styled.div`
  max-width: 728px;
  margin: 0 auto;
  text-align: center;

  h1 {
    font-weight: 700;
    font-size: 48px;
    line-height: 60px;
    @media screen and (max-width: ${breakpoints.small}) {
      font-size: 36px;
      line-height: 40px;
    }
  }

  p {
    color: #A1A1AA;
    margin-bottom: 40px;
  }
`;


const FormWrapper = styled.form`
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: 1px solid rgba(0, 161, 255, 0.2);
    background: rgba(0, 161, 255, 0.05);
    padding: 30px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 8px 24px;
    border-radius: 16px;

    label, a {
    color: #fff;
    font-weight: 600;
    margin-bottom: 8px;
    display: block;
    }

    input, select, textarea {
    padding: 10px;
    border: 1px solid rgba(0, 161, 255, 0.5);
    border-radius: 6px;
    width: 100%;
    font-size: 14px;
    background: #071d49;
    color: #fff;
    }

    textarea {
    min-height: 60px;
    }

    .radio-group {
    display: flex;
    flex-direction: column;   /* stack radios vertically */
    gap: 10px;                /* spacing between each radio option */
    align-items: flex-start;  /* align them to the left */
    }

    .radio-group label {
    display: flex;            /* put input + text side by side */
    align-items: center;      /* vertically center them */
    gap: 8px;                 /* spacing between radio and text */
    font-weight: normal;      /* lighter weight for option text */
    color: #fff;
    }
    .radio-group input {
      width: auto;
    }


    .checkbox-group {
    display: flex;
    flex-direction: row;   /* put input + label side by side */
    align-items: center;   /* vertically center them */
    gap: 8px;              /* spacing between checkbox and text */
    }
    .checkbox-group input {
      width: auto;
    }

    .file-upload {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    }

    button {
    width:200px;
    padding: 12px 25px;
    border-radius: 10px;
    background: #0066F5;
    border: 2px solid #0066F5;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    margin-top: 5px;
  }

  button:hover {
    background: #005a9e;
  }

  .error {
    color: red;
    font-size: 14px;
    margin-top: 4px;
  }
`;


interface FormData {
  RequestorName: string;
  projectName: string;
  email: string;
  additionalEmail: string;
  description: string;
  comments: string;
  implementationTarget: string;
  sendCopy: boolean;
}
interface Errors {
  RequestorName? : string;
  projectName ? : string;
  email ? : string;
  submit?: string;
}

export default function ContactUsPage() {
  
    const [formData, setFormData] = useState < FormData > ({
      RequestorName: '',
      projectName: '',
      email: '',
      additionalEmail: '',  
      description: '',    
      comments: '',
      implementationTarget: '',
      sendCopy: false,
    });
    const [errors, setErrors] = useState < Errors > ({});
    const handleChange = (e: React.ChangeEvent < HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement > ) => {
      const {
          name,
          value,
          type,
          checked,
          files
      } = e.target as HTMLInputElement;
      setFormData((prev) => ({
          ...prev,
          [name]: type === 'checkbox' ? checked : type === 'file' ? files?.[0] || null : value,
      }));
    };
    const validate = (): Errors => {
      let newErrors: Errors = {};
      if (!formData.RequestorName) newErrors.RequestorName = 'Requestor Name is required';
      if (!formData.projectName) newErrors.projectName = 'Project Name is required';
      if (!formData.email) {
          newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = 'Invalid email format';
      }
      return newErrors;
    };


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Clear previous errors
        setErrors({});

        // Just show a message instead of submitting
        setErrors({ submit: "The submit button does not perform any action." });
      };

    
    //const handleSubmit = (e: React.FormEvent < HTMLFormElement > ) => {
     // e.preventDefault();
      // const validationErrors = validate();
      // if (Object.keys(validationErrors).length > 0) {
      //     setErrors(validationErrors);
      // } else {
      //     setErrors({});
      //     console.log('Form submitted:', formData);
      //     alert('Form submitted successfully!');
      // }
    //};

  return (
    <PageWrapper>
      <Section>
        <TitileContent>
          <h1>Contact Us</h1>
          <p>Please fill out the form below to get in touch with us.</p>
        </TitileContent>

        <FormWrapper onSubmit={handleSubmit}>
          <div>
            <label htmlFor="RequestorName">Requestor Name</label>
            <input type="text" name="RequestorName" value={formData.RequestorName} onChange={handleChange} />
            {errors.RequestorName && <div className="error">{errors.RequestorName}</div>}
          </div>

          <div>
            <label htmlFor="projectName">Project Name</label>
            <input type="text" name="projectName" value={formData.projectName} onChange={handleChange} />
            {errors.projectName && <div className="error">{errors.projectName}</div>}
          </div>

          <div>
            <label htmlFor="email">Your Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>


          <div>
            <label htmlFor='comments'>Comments</label>
            <textarea name="comments" value={formData.comments} onChange={handleChange}></textarea>
          </div>

          <label htmlFor='contact'>If you have any additional questions, please reach out to us at <a href="mailto:syncx-support@abbvie.com">syncx-support@abbvie.com</a></label>

          <button type="submit">Submit</button> 
          {errors.submit && <div className="error">{errors.submit}</div>}


        </FormWrapper>
      </Section>
    </PageWrapper>
  );
}
