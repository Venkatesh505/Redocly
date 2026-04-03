import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: auto;
  padding: 60px 40px;
  max-width: 1366px;
  background: #071e4c;
  color: #b3d1fc;
`;

export const Header = styled.div`
  margin-bottom: 40px;
  h1 {
    font-size: 48px;
    font-weight: 700;
    margin: 0;
    color: white;
  }
  p {
    font-size: 20px;
    line-height: 32px;
    margin-top: 16px;
  }
`;

export const DomainDesc = styled.p`
    color: rgba(255, 255, 255, 0.80);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    margin:0px;
    line-height: 20px;
    letter-spacing: -0.15px;
`;

export const DomainList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const DomainBlock = styled.div`
    border: 2px solid rgba(71, 159, 248, 0.25);
    background: #0D2650;
    border-radius: 12px;
    padding: 24px;

    .DomainContentCard{
        border-radius: 0 0 12px 12px;
        border: 2px solid rgba(57, 153, 255, 0.30);
        border-left: 2px solid rgba(57, 153, 255, 0.30);
        background: #0A1929;
        padding: 0px;   

      .DomainContentCardTabRow{
        padding: 20px; 
        padding-bottom: 24px;
        border-bottom: 1px solid rgba(71, 159, 248, 0.20); 
      } 
      .CategoryCardContent{
        padding: 20px; 
      }
    }

   
   
`;

export const DomainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 16px;
`;

export const DomainTitle = styled.h2`
  font-size: 32px;
  line-height: 42px;
  font-weight: 700;
  color: white;
  margin: 0;
  display:flex;
  align-items: center;
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
`;


export const IconWrapper = styled.span`    
    width: 68px;
    height: 68px;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin-right: 8px;
    border-radius: 10px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.05) 100%);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.10), 0 4px 6px -4px rgba(0, 0, 0, 0.10);
`;

export const IconWrapperSmall = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
`;

export const TitleWithIcon = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

export const IconWrapperLarge = styled.span`
border-radius: 10px;
background: rgba(71, 159, 248, 0.13);
display: inline-flex;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: center;
justify-content: center;
margin-top: 2px;
width: 40px;
height: 40px;
`;


export const TabRow = styled.div`
    justify-content: center;
    align-items: flex-start;
    align-self: stretch;
    padding: 15px;
    border-radius: 10px;
    border: 1px solid rgba(71, 159, 248, 0.30);
    background: #0D2650;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.10), 0 4px 6px -4px rgba(0, 0, 0, 0.10);
    display: inline-flex;
    gap: 0px;  
`;

export const Tab = styled.button<{ active: boolean }>`
  padding: 0px 20px;
  border-radius: ${({ active }) => (active ? '10px' : '0px')};
  background: ${({ active }) => (active ? 'linear-gradient(180deg, #479FF8 0%, #357ABD 100%)' : '#0D2650')};
box-shadow: ${({ active }) => (active ? '0 10px 15px -3px rgba(0, 0, 0, 0.10), 0 4px 6px -4px rgba(0, 0, 0, 0.10)' : '0px')};
text-align: left;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
align-items: center;

  color: white;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: ${({ active }) => (active ? 'linear-gradient(180deg, #479FF8 0%, #357ABE 100%)' : '#0D2651')};
    box-shadow: ${({ active }) => (active ? '0 10px 15px -3px rgba(0, 0, 0, 0.10), 0 4px 6px -4px rgba(0, 0, 0, 0.10)' : '0px')};
  }

  p{
  color: #FFF;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 20px;
letter-spacing: -0.15px;

span{
display:block;
color: #FFF;
font-size: 10px;
font-style: normal;
font-weight: 500;
line-height: 16px;
letter-spacing: 0.064px;
}
  }
`;

export const CategoryCard = styled.div`
  background: #071e4c;
  border: 1px solid rgba(57, 153, 255, 0.3);
  border-radius: 12px;
  padding: 20px;
`;

export const CategoryTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  color: white;
  margin: 0 0 8px 0;
`;

export const CategoryDesc = styled.p`
    color: #8AB4F8;
    margin: 0 0 12px 0;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.15px;
`;


export const ButtonRow = styled.div`
  display: flex;
  gap: 12px;
  margin-left: auto;
`;

export const CopyButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 16px;
  border-radius: 8px;
  background: #1a356b;
  color: white;
  font-weight: 600;
  font-size: 14px;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: #142b59;
  }
`;

export const DownloadButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 16px;
  border-radius: 8px;
  background: #479ff8;
  color: white;
  font-weight: 600;
  font-size: 14px;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: #357abd;
  }
`;

export const ButtonIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const TermCount = styled.span`
display: flex;
gap: 8px;
align-items: center;

.domainTypes{
border-radius: 10px;
border: 1px solid rgba(255, 255, 255, 0.30);
background: #FFF;
height: 84px;
padding: 10px 20px;
display: flex;
flex-direction: column;
color: #1A356B;
text-align: center;
font-size: 10px;
font-style: normal;
font-weight: 600;
line-height: 16px;
letter-spacing: 0.064px;

span{
color: #0D2137;
text-align: center;
font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: 42px;
letter-spacing: 0.383px;
}
}
`;

export const SchemaBlock = styled.div`
  position: relative;
  background: rgb(10, 25, 41);
  border: 1px solid rgba(57, 153, 255, 0.3);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  max-height: 400px;
  overflow: auto;
`;
export const SchemaHeader = styled.div`
  position: absolute;
  top: 12px;
  right: 16px;
`;
export const SchemaLabel = styled.div`
  background: #479FF8;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 8px;
`;
export const CodeWrapper = styled.div`
  color: #b3d1fc;
  font-size: 14px;
  line-height: 22px;
  white-space: pre-wrap;
  word-break: break-word;
`;