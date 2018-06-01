import {assert} from 'chai';
import sinon from 'sinon';
import request from 'request-promise';
import cometMlAPI from '../src/index';

import {generateRequestUri, BASE_URL, getRequest} from '../src/utils'

const version = "v1";
const params = {projectId: 123};
const endPoint = "projects";
const apiKey = "123";

const goodResponseObject = {
  statusCode: 200,
  data: {
    some: "data"
  }
};

const badResponseObject = {
  statusCode: 500,
};


describe('Test Comet.ml API', () => {


  it('should generate a url without a param', () => {
    const expectedUrl = BASE_URL.v1 + endPoint
    const generatedUrl = generateRequestUri({endPoint, params: {}, version})
    assert.equal(generatedUrl, expectedUrl)
  });

  describe('Test getRequest()', () => {
    const endPoint = "projects";

    describe('Test good response', () => {
      before(function () {
        sinon
          .stub(request, 'get')
          .resolves(goodResponseObject);
      });

      after(function () {
        request.get.restore(); // Unwraps the spy
      });

      it("should return 200", (done) => {
        const endPoint = "projects";
        getRequest({endPoint, params, version, apiKey}).then(response => {
          assert.equal(response.statusCode, 200);
          request.get.called.should.be.equal(true);
          done()
        });
      });
    });

    describe('Test bad response', () => {
      before(function () {
        sinon
          .stub(request, 'get')
          .resolves(badResponseObject);
      });

      after(function () {
        request.get.restore(); // Unwraps the spy
      });

      it("should return 500", (done) => {
        getRequest({endPoint, params, version, apiKey}).then(response => {
          assert.equal(response.statusCode, 500);
          request.get.called.should.be.equal(true);
          done();
        });
      });
    });
  })

  describe("Test the cometMlAPI class", ()=>{
    before(function () {
      sinon
        .stub(request, 'get')
        .resolves(goodResponseObject);
    });

    after(function () {
      request.get.restore(); // Unwraps the spy
    });

    const api = new cometMlAPI("123", "v1");

    it("should have v1" ,()=>{
      const api = new cometMlAPI("123", version);
      assert.equal(api.getVersion(), "v1");
    });

    it("should fallback to v1" ,()=>{
      const api = new cometMlAPI("123", "v2");
      assert.equal(api.getVersion(), "v1");
    });

    it("should fetch projects", (done)=>{
      api.projects().then(response=>{
        assert.equal(response.statusCode, 200);
        request.get.called.should.be.equal(true);
        done();
      })
    });

    it("should fetch experiments", (done)=>{
      api.experiments().then(response=>{
        assert.equal(response.statusCode, 200);
        request.get.called.should.be.equal(true);
        done();
      })
    });

    it("should fetch experiment's html", (done)=>{
      api.experimentHtml().then(response=>{
        assert.equal(response.statusCode, 200);
        request.get.called.should.be.equal(true);
        done();
      })
    });

    it("should fetch experiment's code", (done)=>{
      api.experimentCode().then(response=>{
        assert.equal(response.statusCode, 200);
        request.get.called.should.be.equal(true);
        done();
      })
    });

    it("should fetch experiment's stdout", (done)=>{
      api.experimentStdout().then(response=>{
        assert.equal(response.statusCode, 200);
        request.get.called.should.be.equal(true);
        done();
      })
    });

    it("should fetch experiment's installed-packages", (done)=>{
      api.experimentInstalledPackages().then(response=>{
        assert.equal(response.statusCode, 200);
        request.get.called.should.be.equal(true);
        done();
      })
    });

    it("should fetch experiment's graph", (done)=>{
      api.experimentGraph().then(response=>{
        assert.equal(response.statusCode, 200);
        request.get.called.should.be.equal(true);
        done();
      })
    });

    it("should fetch experiment's images", (done)=>{
      api.experimentImages().then(response=>{
        assert.equal(response.statusCode, 200);
        request.get.called.should.be.equal(true);
        done();
      })
    });

    it("should fetch experiment's params", (done)=>{
      api.experimentParams().then(response=>{
        assert.equal(response.statusCode, 200);
        request.get.called.should.be.equal(true);
        done();
      })
    });

    it("should fetch experiment's metrics", (done)=> {
      api.experimentMetrics().then(response => {
        assert.equal(response.statusCode, 200);
        request.get.called.should.be.equal(true);
        done();
      })
    })

    it("should fetch experiment's log-other", (done)=>{
      api.experimentLogOther().then(response=>{
        assert.equal(response.statusCode, 200);
        request.get.called.should.be.equal(true);
        done();
      })
    });

    it("should fetch experiment's metrics-raw", (done)=>{
      api.experimentMetricsRaw().then(response=>{
        assert.equal(response.statusCode, 200);
        request.get.called.should.be.equal(true);
        done();
      })
    });
  })
});
