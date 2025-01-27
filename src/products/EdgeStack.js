import { Link } from 'gatsby';
import React, { useState } from 'react';

import Card from '../../../src/components/Card';
import Icon from '../../../src/components/Icon';
import { goToEdgeStackQuickStart } from '../../../src/utils/routes';

import { EdgeStackCards, EdgeStackSections } from './config';

const EdgeStack = () => {

  const initialCards = EdgeStackCards.filter(c => c.section === EdgeStackSections[0].id);
  const [cards, setCards] = useState(initialCards);
  const [section, setSection] = useState(EdgeStackSections[0].id);

  const handleSectionClick = (e, section) => {
    const newCards = EdgeStackCards.filter(c => c.section === section);
    setSection(section);
    setCards(newCards);
  }

  return (
    <section className="docs__started docs__container product-page">
      <h1 className="docs__heading-primary docs__heading-primary--aligned">
        <Icon name="edge-stack-icon" /> Edge Stack
      </h1>
      <p>Route and secure traffic to your cluster with a Kubernetes-native API Gateway built on the Envoy Proxy.</p>
      <Link to={goToEdgeStackQuickStart} className="docs__button-secondary docs__m-bottom-50">
        Get Started <Icon name="right-arrow" className="docs__button-secondary--arrow" />
      </Link>
      <nav>
        <div className="docs__section-nav-content">
          <ul className="docs__section-nav">
            {EdgeStackSections.map(s => (
              <li key={s.id} className={`${s.id === section ? 'selected' : ''}`} onClick={(e) => handleSectionClick(e, s.id)}>{s.name}</li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="docs__cards">
        {cards.map(card => (
          <Card
            key={card.title}
            title={card.title}
            description={card.description}
            link={card.link}
            linkText={card.linkText}
          />
        ))}
      </div>
    </section>
  )
};

export default EdgeStack;