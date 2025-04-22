import Spacing from '../Spacing/Spacing';

export default function Section({
  className,
  spacingTopLg = '_',
  spacingTopMd = '_',
  spacingBottomLg = '_',
  spacingBottomMd = '_',
  bgImgUrl,
  children,
}) {
  const styles = {};

  if (bgImgUrl) {
    styles.backgroundImage = `url(${bgImgUrl})`;
  }

  return (
    <section className={`${className ? className : ''}`} style={styles}>
      <Spacing
        spacingLg={spacingTopLg ? spacingTopLg : 0}
        spacingMd={spacingTopMd ? spacingTopMd : 0}
      />
      {children}
      <Spacing
        spacingLg={spacingBottomLg ? spacingBottomLg : 0}
        spacingMd={spacingBottomMd ? spacingBottomMd : 0}
      />
    </section>
  );
}
