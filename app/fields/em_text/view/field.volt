{% extends "table/stringEditField.volt" %}
{% block input %}
	<div class="filedEdit">
		<textarea
			{% if fieldArr['settings']['visualEditor'] is defined and fieldArr['settings']['visualEditor'] == 1 %}
				class="visual"
			{% elseif fieldArr['settings']['visualEditor'] is defined and fieldArr['settings']['visualEditor'] == 2 %}
				class="codeeditorcodemirror"
			{% endif %}
			name="field[{{fieldArr['field']}}]"
			placeholder="{{fieldArr['field']}}">{% if element[fieldArr['field']] is defined %}{{element[fieldArr['field']]}}{% endif %}</textarea>
	</div>
{% endblock %}

