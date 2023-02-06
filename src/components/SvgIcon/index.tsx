import React from "react";
import { useDynamicSvgImport } from "../../hooks/useDynamicSvgImport";

interface IProps {
  iconName: string;
  wrapperStyle?: any;
  svgProp?: React.SVGProps<SVGSVGElement>;
}

function SvgIcon(props: IProps) {
  const { iconName, wrapperStyle, svgProp } = props;
  const { loading, SvgIcon } = useDynamicSvgImport(iconName);

  return (
    <>
      {loading && <span className="">...</span>}
      {SvgIcon && (
        <span className={wrapperStyle}>
          <SvgIcon {...svgProp} />
        </span>
      )}
    </>
  );
}

export default React.memo(SvgIcon);
