import { RowProps } from 'antd/lib/row';
import classNames from 'classnames';
// import { useTranslation } from 'react-i18next';

function Loading(props: RowProps) {
  // const { t } = useTranslation();
  const isLoadingApi = true; // tạm thời
  return (
    // <Row justify="center" {...props}>
    //   <Col>{/* <Loading3QuartersOutlined spin /> */}</Col>
    // </Row>
    <div
      className={classNames(
        isLoadingApi ? 'fixed' : 'hidden',
        'h-full z-[100] inset-0 w-full fixed bg-gray-100 bg-opacity-50  '
      )}
    >
      <div className="flex justify-center items-center h-full">
        <div className="text-center w-[100px] h-[100px] rounded-md p-3 flex justify-center items-center">
          <div className="">
            <div className="flex justify-center">
              <svg
                style={{
                  margin: 'auto',
                  background: 'rgba(254, 255, 255, 0)',
                  display: 'block',
                  shapeRendering: 'auto'
                }}
                width="46px"
                height="46px"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
              >
                <circle cx="30" cy="50" fill="#03426e" r="20">
                  <animate
                    attributeName="cx"
                    repeatCount="indefinite"
                    dur="1s"
                    keyTimes="0;0.5;1"
                    values="30;70;30"
                    begin="-0.5s"
                  ></animate>
                </circle>
                <circle cx="70" cy="50" fill="#ec2e0f" r="20">
                  <animate
                    attributeName="cx"
                    repeatCount="indefinite"
                    dur="1s"
                    keyTimes="0;0.5;1"
                    values="30;70;30"
                    begin="0s"
                  ></animate>
                </circle>
                <circle cx="30" cy="50" fill="#03426e" r="20">
                  <animate
                    attributeName="cx"
                    repeatCount="indefinite"
                    dur="1s"
                    keyTimes="0;0.5;1"
                    values="30;70;30"
                    begin="-0.5s"
                  ></animate>
                  <animate
                    attributeName="fill-opacity"
                    values="0;0;1;1"
                    calcMode="discrete"
                    keyTimes="0;0.499;0.5;1"
                    dur="1s"
                    repeatCount="indefinite"
                  ></animate>
                </circle>
              </svg>
            </div>
            <div className="text-base text-center text-gray">{/* {t('System.Loading')} */}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
