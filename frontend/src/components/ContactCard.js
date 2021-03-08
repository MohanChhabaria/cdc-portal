import React from 'react';
import ContactCardCSS from '../styles/components/ContactCard.module.css';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const ContactCard = ({ data }) => {
  return (
    <div className={ContactCardCSS.contactCard}>
      <div className={ContactCardCSS.cardHeader}>
        <div className={ContactCardCSS.designation}>
          <b>{data.designation.designation}</b>
        </div>
        <div className={ContactCardCSS.subDesignation}>
          {data.sub_designation}
        </div>
      </div>
      <img
        className={ContactCardCSS.profileImage}
        src={data.profile_image}
        alt={data.name}
      />
      <div className={ContactCardCSS.cardContent}>
        <b style={{ margin: '0', fontSize: '1.5rem' }}>
          {data.user.first_name} {data.user.last_name}
        </b>
        <div className={ContactCardCSS.footer}>
          <table style={{ tableLayout: 'auto', margin: 'auto' }}>
            <tr>
              <td>
                <a
                  href={`mailto:${data.user.email}`}
                  className={ContactCardCSS.email}
                >
                  <EmailIcon style={{ margin: '0 0.5rem' }} />
                  {data.user.email}
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <div className={ContactCardCSS.phone}>
                  <PhoneIcon style={{ margin: '0 0.5rem' }} />
                  {data.phone}
                </div>
              </td>
            </tr>
          </table>
          {data.github_link || data.linkedin_link ? (
            <div className={ContactCardCSS.social}>
              {data.github_link ? (
                <a href={data.github_link} className={ContactCardCSS.github}>
                  <GitHubIcon style={{ width: '1.8rem', height: '1.8rem' }} />
                </a>
              ) : null}
              {data.linkedin_link ? (
                <a
                  href={data.linkedin_link}
                  className={ContactCardCSS.linkedin}
                >
                  <LinkedInIcon
                    style={{
                      width: '2.2rem',
                      height: '2.2rem',
                    }}
                  />
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;