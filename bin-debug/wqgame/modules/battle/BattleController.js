var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var BattleController = (function (_super) {
    __extends(BattleController, _super);
    function BattleController() {
        var _this = _super.call(this) || this;
        var self = _this;
        self._battleView = new BattleView(self, LayerManager.GAME_MAP_LAYER);
        App.ViewManager.register(ViewConst.Battle, self._battleView);
        self._battleModel = new BattleModel(self);
        self.setModel(self._battleModel);
        self._battleProxy = new BattleProxy(self);
        //注册模块消息
        self.registerFunc(BattleConst.BATTLE_INIT, self.onBattleInit, self);
        self.registerFunc(BattleConst.BATTLE_SELECT_LEVEL, self.onEnterLevelView, self);
        return _this;
    }
    BattleController.prototype.onBattleInit = function (param) {
        var self = this;
        self._battleModel.levelVO = GlobleVOData.getData(GlobleVOData.LevelVO, param[0]);
        App.ViewManager.open(ViewConst.Battle);
        self.initRegisterView();
    };
    /** 注册界面才可以打开界面 */
    BattleController.prototype.initRegisterView = function () {
        var self = this;
    };
    /** 进入关卡界面 */
    BattleController.prototype.onEnterLevelView = function (index) {
        var self = this;
        Log.trace("index:" + index);
    };
    return BattleController;
}(BaseController));
__reflect(BattleController.prototype, "BattleController");
//# sourceMappingURL=BattleController.js.map