import React from "react";

interface Props {
  category: string;
}

const CategoryIcon: React.FC<Props> = ({ category }) => {
  switch (category) {
    case "All":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <g clip-path="url(#clip0_1025_14310)">
                <path d="M6.62479 10.3342C6.56527 10.1034 6.44502 9.89289 6.27653 9.72441C6.10805 9.55592 5.8975 9.43567 5.66679 9.37615L1.57679 8.32148C1.50701 8.30168 1.4456 8.25965 1.40186 8.20178C1.35813 8.14391 1.33447 8.07335 1.33447 8.00082C1.33447 7.92828 1.35813 7.85772 1.40186 7.79985C1.4456 7.74198 1.50701 7.69996 1.57679 7.68015L5.66679 6.62482C5.89742 6.56535 6.10792 6.4452 6.27639 6.27684C6.44486 6.10849 6.56517 5.89808 6.62479 5.66748L7.67946 1.57748C7.69906 1.50743 7.74105 1.44571 7.799 1.40175C7.85696 1.35778 7.92771 1.33398 8.00046 1.33398C8.0732 1.33398 8.14395 1.35778 8.20191 1.40175C8.25987 1.44571 8.30185 1.50743 8.32146 1.57748L9.37546 5.66748C9.43497 5.8982 9.55523 6.10875 9.72371 6.27723C9.89219 6.44571 10.1027 6.56597 10.3335 6.62548L14.4235 7.67948C14.4938 7.69888 14.5558 7.74082 14.6 7.79887C14.6442 7.85691 14.6682 7.92786 14.6682 8.00082C14.6682 8.07378 14.6442 8.14472 14.6 8.20277C14.5558 8.26081 14.4938 8.30275 14.4235 8.32215L10.3335 9.37615C10.1027 9.43567 9.89219 9.55592 9.72371 9.72441C9.55523 9.89289 9.43497 10.1034 9.37546 10.3342L8.32079 14.4242C8.30118 14.4942 8.2592 14.5559 8.20124 14.5999C8.14328 14.6439 8.07254 14.6677 7.99979 14.6677C7.92704 14.6677 7.85629 14.6439 7.79834 14.5999C7.74038 14.5559 7.69839 14.4942 7.67879 14.4242L6.62479 10.3342Z" stroke="#D1D5DC" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.3335 2V4.66667" stroke="#D1D5DC" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.6667 3.33398H12" stroke="#D1D5DC" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.6665 11.334V12.6673" stroke="#D1D5DC" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.33333 12H2" stroke="#D1D5DC" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
                <clipPath id="clip0_1025_14310">
                <rect width="16" height="16" fill="white"/>
                </clipPath>
            </defs>
        </svg>
      );
    case "Data Integration":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
            <path d="M8.4001 5.60039C11.8795 5.60039 14.7001 4.66019 14.7001 3.50039C14.7001 2.34059 11.8795 1.40039 8.4001 1.40039C4.9207 1.40039 2.1001 2.34059 2.1001 3.50039C2.1001 4.66019 4.9207 5.60039 8.4001 5.60039Z" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2.1001 3.5V13.3C2.1001 13.857 2.76385 14.3911 3.94533 14.7849C5.1268 15.1788 6.72923 15.4 8.4001 15.4C10.071 15.4 11.6734 15.1788 12.8549 14.7849C14.0364 14.3911 14.7001 13.857 14.7001 13.3V3.5" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2.1001 8.40039C2.1001 8.95735 2.76385 9.49149 3.94533 9.88532C5.1268 10.2791 6.72923 10.5004 8.4001 10.5004C10.071 10.5004 11.6734 10.2791 12.8549 9.88532C14.0364 9.49149 14.7001 8.95735 14.7001 8.40039" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      );
    case "Monitoring":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M1.37468 8.23224C1.31912 8.08256 1.31912 7.91792 1.37468 7.76824C1.91581 6.45614 2.83435 5.33427 4.01386 4.54484C5.19336 3.75541 6.58071 3.33398 8.00001 3.33398C9.41932 3.33398 10.8067 3.75541 11.9862 4.54484C13.1657 5.33427 14.0842 6.45614 14.6253 7.76824C14.6809 7.91792 14.6809 8.08256 14.6253 8.23224C14.0842 9.54434 13.1657 10.6662 11.9862 11.4556C10.8067 12.2451 9.41932 12.6665 8.00001 12.6665C6.58071 12.6665 5.19336 12.2451 4.01386 11.4556C2.83435 10.6662 1.91581 9.54434 1.37468 8.23224Z" stroke="#D1D5DC" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" stroke="#D1D5DC" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      );
    case "Security":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" viewBox="0 0 12 15" fill="none">
            <path d="M11.3332 7.99965C11.3332 11.333 8.99984 12.9996 6.2265 13.9663C6.08128 14.0155 5.92353 14.0132 5.77984 13.9596C2.99984 12.9996 0.666504 11.333 0.666504 7.99965V3.33298C0.666504 3.15617 0.736742 2.9866 0.861766 2.86158C0.98679 2.73655 1.15636 2.66632 1.33317 2.66632C2.6665 2.66632 4.33317 1.86632 5.49317 0.852982C5.63441 0.732314 5.81407 0.666016 5.99984 0.666016C6.1856 0.666016 6.36527 0.732314 6.5065 0.852982C7.67317 1.87298 9.33317 2.66632 10.6665 2.66632C10.8433 2.66632 11.0129 2.73655 11.1379 2.86158C11.2629 2.9866 11.3332 3.15617 11.3332 3.33298V7.99965Z" stroke="#D1D5DC" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      );
    case "Infrastructure":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <g clip-path="url(#clip0_1025_14341)">
                <path d="M13.3335 1.33398H2.66683C1.93045 1.33398 1.3335 1.93094 1.3335 2.66732V5.33398C1.3335 6.07036 1.93045 6.66732 2.66683 6.66732H13.3335C14.0699 6.66732 14.6668 6.07036 14.6668 5.33398V2.66732C14.6668 1.93094 14.0699 1.33398 13.3335 1.33398Z" stroke="#D1D5DC" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.3335 9.33398H2.66683C1.93045 9.33398 1.3335 9.93094 1.3335 10.6673V13.334C1.3335 14.0704 1.93045 14.6673 2.66683 14.6673H13.3335C14.0699 14.6673 14.6668 14.0704 14.6668 13.334V10.6673C14.6668 9.93094 14.0699 9.33398 13.3335 9.33398Z" stroke="#D1D5DC" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4 4H4.00667" stroke="#D1D5DC" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4 12H4.00667" stroke="#D1D5DC" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
                <clipPath id="clip0_1025_14341">
                <rect width="16" height="16" fill="white"/>
                </clipPath>
            </defs>
        </svg>
      );
    case "Developer Tools":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <g clip-path="url(#clip0_1025_14350)">
                <path d="M10.6665 12L14.6665 8L10.6665 4" stroke="#D1D5DC" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.3335 4L1.3335 8L5.3335 12" stroke="#D1D5DC" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
                <clipPath id="clip0_1025_14350">
                <rect width="16" height="16" fill="white"/>
                </clipPath>
            </defs>
        </svg>
      );
    default:
      return null;
  }
};

export default CategoryIcon;
