import React from 'react';
import { User } from '../../types/models';

type PropertyHostProps = {
  host: User;
  description: string;
};

const PropertyHost = ({ host, description }: PropertyHostProps) => {
  const avatarClasses = host.isPro
    ? 'user__avatar-wrapper property__avatar-wrapper property__avatar-wrapper--pro'
    : 'user__avatar-wrapper property__avatar-wrapper';
  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className={avatarClasses}>
          <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt={host.name} />
        </div>
        <span className="property__user-name">{host.name}</span>
        {host.isPro && <span className="property__user-status">Pro</span>}
      </div>
      <div className="property__description">
        <p className="property__text">{description}</p>
      </div>
    </div>
  );
};

export default React.memo(
  PropertyHost,
  (prev, next) => !(prev.description !== next.description || prev.host.id !== next.host.id)
);
