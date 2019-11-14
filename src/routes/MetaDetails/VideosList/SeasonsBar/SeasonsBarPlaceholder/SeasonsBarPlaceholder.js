const React = require('react');
const PropTypes = require('prop-types');
const classnames = require('classnames');
const Icon = require('stremio-icons/dom');
const styles = require('./styles');

const SeasonsBarPlaceholder = ({ className }) => {
    return (
        <div className={classnames(className, styles['seasons-bar-placeholder-container'])}>
            <div className={styles['prev-season-button']}>
                <Icon className={styles['icon']} icon={'ic_arrow_left'} />
            </div>
            <div className={styles['seasons-popup-label-container']}>
                <div className={styles['seasons-popup-label']} />
            </div>
            <div className={styles['next-season-button']}>
                <Icon className={styles['icon']} icon={'ic_arrow_right'} />
            </div>
        </div>
    );
};

SeasonsBarPlaceholder.propTypes = {
    className: PropTypes.string
};

module.exports = SeasonsBarPlaceholder;