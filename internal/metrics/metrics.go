package metrics

import (
	"net"
	"net/http"
	"time"
)

// Metric A metric under space
type Metric struct {
	Duration       time.Duration
	ReponseTime    time.Duration
	ConnectionTime time.Duration
}

type Submetric struct {
	rtp       http.RoundTripper
	dialer    *net.Dialer
	connStart time.Time
	connEnd   time.Time
	reqStart  time.Time
	reqEnd    time.Time
}

func Tracer() *Submetric {

	tr := &Submetric{
		dialer: &net.Dialer{
			Timeout:   30 * time.Second,
			KeepAlive: 30 * time.Second,
		},
	}
	tr.rtp = &http.Transport{
		Proxy:               http.ProxyFromEnvironment,
		Dial:                tr.dial,
		TLSHandshakeTimeout: 10 * time.Second,
	}
	return tr
}

func (tr *Submetric) RoundTrip(r *http.Request) (*http.Response, error) {
	tr.reqStart = time.Now()
	resp, err := tr.rtp.RoundTrip(r)
	tr.reqEnd = time.Now()
	return resp, err
}

func (tr *Submetric) dial(network, addr string) (net.Conn, error) {
	tr.connStart = time.Now()
	cn, err := tr.dialer.Dial(network, addr)
	tr.connEnd = time.Now()
	return cn, err
}

func (tr *Submetric) ReqDuration() time.Duration {
	return tr.Duration() - tr.ConnDuration()
}

func (tr *Submetric) ConnDuration() time.Duration {
	return tr.connEnd.Sub(tr.connStart)
}

func (tr *Submetric) Duration() time.Duration {
	return tr.reqEnd.Sub(tr.reqStart)
}
