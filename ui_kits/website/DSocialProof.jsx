/* DSocialProof.jsx — trusted-client logo strip */
function DSocialProof() {
  var clients = [
    { name: 'Shoprite',    file: 'shopritesa.jpg'    },
    { name: 'Pick n Pay',  file: 'Pick-N-Pay.jpg'    },
    { name: 'Jumbo',       file: 'Jumbo.jpg'         },
    { name: 'Massmart',    file: 'Massmart-1.jpg'    },
    { name: 'Mr Price',    file: 'Mr-Price.jpg'      },
    { name: 'Foschini',    file: 'Foschini.jpg'      },
    { name: 'Superbalist', file: 'Superbalist-1.jpg' },
  ];
  return (
    <section style={{
      background: '#fff',
      borderTop: '1px solid #EDEAE6',
      borderBottom: '1px solid #EDEAE6',
      padding: '48px 30px',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <p style={{
          fontFamily: 'var(--font-cond)',
          fontWeight: 700,
          fontSize: 12,
          letterSpacing: '.18em',
          textTransform: 'uppercase',
          color: '#999',
          textAlign: 'center',
          margin: '0 0 36px',
        }}>
          Trusted to deliver for South Africa's leading brands
        </p>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px 36px',
        }}>
          {clients.map(function(c) {
            return (
              <img
                key={c.name}
                alt={c.name}
                src={'../../assets/Social proof/' + c.file}
                style={{
                  height: 44,
                  maxWidth: 130,
                  objectFit: 'contain',
                  filter: 'grayscale(1) contrast(.7)',
                  opacity: 0.6,
                  transition: 'opacity 180ms var(--ease), filter 180ms var(--ease)',
                }}
                onMouseEnter={function(e) {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.filter = 'grayscale(0) contrast(1)';
                }}
                onMouseLeave={function(e) {
                  e.currentTarget.style.opacity = '0.6';
                  e.currentTarget.style.filter = 'grayscale(1) contrast(.7)';
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
window.DSocialProof = DSocialProof;
