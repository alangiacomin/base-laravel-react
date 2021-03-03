import { upperFirst } from '@alangiacomin/ui-components';
import { PropTypes } from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import ErrorComponent from './ErrorComponent';

const Error = (props) => {
  const { errorCode } = props;
  const { t } = useTranslation();
  const getDescription = (code) => {
    switch (code) {
      case 403:
        return upperFirst(t('unauthorized'));
      case 404:
        return upperFirst(t('page_not_found'));
      default:
        return upperFirst(t('undefined_error'));
    }
  };
  return (
    <ErrorComponent
      title={upperFirst(t('error'))}
      descError={getDescription(errorCode)}
    />
  );
};

const mapStateToProps = (state) => ({});

Error.propTypes = {
  errorCode: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Error);
