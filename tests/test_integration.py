import pytest
import requests

@pytest.mark.integration
def test_external_api():
    resp = requests.get('https://httpbin.org/status/200')
    assert resp.status_code == 200