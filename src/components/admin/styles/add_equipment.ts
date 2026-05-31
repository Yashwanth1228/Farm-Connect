import styled from "@emotion/styled";

  /* ================= LAYOUT ================= */

export const Page = styled.div`
min-height: 100vh;
background: #fafaf5;
display: flex;
justify-content: center;
align-items: center;
padding: 40px;
`;

export const RightPanel = styled.div`
width: 65%;
padding: 40px;

overflow-y: auto;
max-height: 90vh;

/* ✅ smooth scrolling */
scrollbar-width: thin;

@media (max-width: 1024px) {
padding: 24px;
}

@media (max-width: 768px) {
width: 100%;
padding: 20px;
max-height: 95vh;
}
`;
/* ================= HEADER ================= */

export const Title = styled.h2`
font-size: 28px;
font-weight: 800;
margin-bottom: 10px;
`;

export const Subtitle = styled.p`
font-size: 14px;
color: #666;
margin-bottom: 30px;
`;

/* ================= FORM ================= */

export const Form = styled.div`
display: grid;
gap: 20px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 20px;

@media (max-width: 768px) {
gap: 16px;
}

@media (max-width: 640px) {
grid-template-columns: 1fr;
}
`;

export const FullRow = styled.div`
grid-column: span 2;

@media (max-width: 640px) {
grid-column: span 1; /* ✅ FIX */
}
`;

export const Label = styled.label`
font-size: 12px;
font-weight: 700;
color: #666;
margin-bottom: 5px;
display: block;
`;

export const Input = styled.input`
width: 100%;
padding: 14px;
border-radius: 10px;
border: none;
background: #f4f4ef;
font-size: 14px;

&:focus {
  outline: 2px solid #0d631b;
}

@media (max-width: 480px) {
  padding: 12px;
  font-size: 13px;
}
`;

export const Field = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`;

export const Select = styled.select`
width: 100%;
padding: 14px;
border-radius: 10px;
border: none;
background: #f4f4ef;
font-size: 14px;
cursor: pointer;

/* Remove default ugly styles */
appearance: none;
-webkit-appearance: none;
-moz-appearance: none;

/* Custom dropdown arrow */
background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg fill='%23666' viewBox='0 0 20 20'%3E%3Cpath d='M5.5 7l4.5 4 4.5-4'/%3E%3C/svg%3E");
background-repeat: no-repeat;
background-position: right 12px center;
background-size: 14px;

&:focus {
outline: 2px solid #0d631b;
}

/* ✅ Tablet */
@media (max-width: 768px) {
padding: 12px;
font-size: 13px;
}

/* ✅ Mobile */
@media (max-width: 480px) {
padding: 11px;
font-size: 13px;
}
`;

export const UploadBox = styled.div`
border: 2px dashed #ccc;
padding: 30px;
border-radius: 16px;
text-align: center;
cursor: pointer;
background: #f4f4ef;

display: flex;
align-items: center;
justify-content: center;

min-height: 120px;
transition: all 0.2s ease;

&:hover {
border-color: #0d631b;
background: #eef6ee;
}

/* ✅ Tablet */
@media (max-width: 768px) {
padding: 24px;
min-height: 100px;
font-size: 14px;
}

/* ✅ Mobile */
@media (max-width: 480px) {
padding: 18px;
min-height: 90px;
border-radius: 12px;
font-size: 13px;
}

/* ✅ Very small screens */
@media (max-width: 360px) {
padding: 14px;
font-size: 12px;
}
`;

export const Button = styled.button`
margin-top: 20px;
padding: 16px;
border-radius: 14px;
border: none;

background: linear-gradient(to right, #0d631b, #2e7d32);
color: white;
font-weight: 700;
cursor: pointer;

position: sticky;
bottom: 0;

&:hover {
transform: scale(1.02);
}

@media (max-width: 640px) {
width: 100%;
}
`;


export const Wrapper = styled.div`
min-height: 100vh;
background: #fafaf5;
display: flex;
justify-content: center;
align-items: center;
padding: 40px;
`;

export const Overlay = styled.div`
position: fixed;
inset: 0;
background: rgba(0, 0, 0, 0.4);

display: flex;
justify-content: center;
align-items: center;

padding: 12px;
z-index: 100;

overflow-y: auto; /* ✅ allow full modal scroll */
`;

export const Modal = styled.div`
width: 100%;
max-width: 1100px;

display: flex;
flex-direction: row;

border-radius: 24px;
overflow: hidden;

background: white;
box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);

max-height: 90vh;

/* ✅ Tablet */
@media (max-width: 1024px) {
max-width: 95%;
}

/* ✅ Mobile */
@media (max-width: 768px) {
flex-direction: column;
max-height: 95vh;
}
`;

export const LeftPanel = styled.div`
width: 35%;
background: linear-gradient(135deg, #0d631b, #2e7d32);
color: #cbffc2;

padding: 40px;

display: flex;
flex-direction: column;
justify-content: space-between;

position: relative;

@media (max-width: 1024px) {
padding: 30px;
}

/* ✅ Better UX than display:none */
@media (max-width: 768px) {
width: 100%;
padding: 20px;
min-height: 120px;
}
`;

export const CloseBtn = styled.button`
position: absolute;
top: 16px;
right: 16px;

background: white;
border: none;
border-radius: 50%;

width: 36px;
height: 36px;

cursor: pointer;
font-weight: bold;
z-index: 10;
`;

export const PanelTitle = styled.h3`
font-size: 28px;
font-weight: 800;
line-height: 1.2;
`;

export const PanelText = styled.p`
margin-top: 15px;
font-size: 14px;
line-height: 1.6;
`;

export const FooterText = styled.div`
font-size: 12px;
opacity: 0.7;
`;

export const BlurCircle = styled.div`
position: absolute;
bottom: -80px;
right: -80px;
width: 200px;
height: 200px;
background: #0d631b;
border-radius: 50%;
filter: blur(60px);
opacity: 0.4;
`;