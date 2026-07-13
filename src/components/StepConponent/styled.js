import { Steps } from 'antd';
import styled from 'styled-components';

// 1. Xóa bỏ dòng const { Step } = Steps;
// 2. Trực tiếp style cho component Steps gốc
export const CustomSteps = styled(Steps)`
  .ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-icon {
    background: #9255FD;
  }
`;